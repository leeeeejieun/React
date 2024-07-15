import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { Routes,Route} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom"
import Content from '../components/Content';
import Create from '../components/Create';
import Update from '../components/Update';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import styled from 'styled-components';

const Page = () => {

    const initTopic = () =>{
        return([ 
            {link: "/html", title: "HTML", body: "html is ...", img: "img/html.png"},
            {link: "/css", title: "CSS", body: "css is ...", img: "img/css.png"},
            {link: "/js", title: "JavaScript", body: "js is ...", img: "img/js.png"}
        ]);
    };

    const [topics, setTopics] = useState(initTopic);  // 초기값을 콜백 함수로 주면 처음 렌더링 될 때만 useState 호출
    const currentTopic = useRef(null);                // 현재 페이지에 대한 topic 저장
    const navigate = useNavigate();                   // 특정 이벤트가 발생할 때 주소를 이동시키는 기능 제공
    const location = useLocation();                   // 현재 페이지의 위치를 반환
    const [modal, setModal] = useState(false);        // 모달 상태 관리를 위한 값

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    // 렌더링될 때마다 currentTopic.current 값 변경이 이루어짐
    useEffect(() => {
        const newTopic = topics.find(topic => 
            topic.link === location.pathname && (topic.link !== "/create" || topic.link !== "/update"));
        
            // newTopic이 undefined가 아닌 경우에만 실행
            if(newTopic){
                currentTopic.current = newTopic;
                localStorage.setItem("currentTopic", JSON.stringify(newTopic));
            }
    });

     
    //  각 topic에 대한 라우팅 경로 설정
    const routeList = useMemo(() => {
        return topics.map(topic => {
            const {link, title , body , img } = topic;
            return (
                <Route 
                    key = {link}
                    path = {link}
                    element = {<Content title={title} body={body} img={img}/>}
                />
            );
        });
    },[topics]);


    //  topic 삭제 기능
    const onDelete = useCallback(() => {
            setTopics(topics.filter(topic=> topic.link !== currentTopic.current.link));
            navigate('/');  // 삭제 완료 후 메인 페이지로 이동
    },[topics]);
    

    return (
        <>
            <Wrapper className='flex-between'>
                <Header />
                <Nav topics={topics}/>
            </Wrapper>

            <Routes>
                <Route path='/' element={<Content title="Welcome" body="web is ..." img="img/web.png"/>}></Route>
                {routeList}
                <Route path='/create' element={<Create topics={topics} setTopics={setTopics}/>}/>
                <Route path='/update' element={<Update topics={topics} setTopics={setTopics}/>}/>
            </Routes>

            <Footer openModal={openModal}/>
            <p style={{marginBottom: "30rem"}}></p>   {/* 스크롤 방지 테스트 여백 설정*/}
            <Modal modal={modal} closeModal={closeModal} onDelete={onDelete}/>
        </>
    );
}

export default Page;

const Wrapper = styled.div`
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.textColor};
    border-bottom: 1px solid black;
    padding: 10px;
`;
