import React, { useState, useRef, useEffect} from 'react';
import { Routes,Route} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom"
import Content from '../components/Content';
import Create from '../components/Create';
import Update from '../components/Update';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Page = () => {
    
    const initTopic = () =>{
        return([ 
            {link: "/html", title: "HTML", body: "html is ...", img: "img/html.png"},
            {link: "/css", title: "CSS", body: "css is ...", img: "img/css.png"},
            {link: "/js", title: "JavaScript", body: "js is ...", img: "img/js.png"}
        ]);
    };
    
    const [topics, setTopics] = useState(initTopic);  // 초기값을 콜백 함수로 주면 처음 렌더링 될 때만 useState 호출
    const currentTopic = useRef(null);                    // 현재 페이지에 대한 topic 저장
    const navigate = useNavigate();                   // 특정 이벤트가 발생할 때 주소를 이동시키는 기능 제공
    const location = useLocation();                   // 현재 페이지의 위치를 반환

    // 렌더링될 때마다 currentTopic.current 값 변경이 이루어짐
    useEffect(()=>{
        const newTopic = topics.find(topic => 
            topic.link === location.pathname && (topic.link !== "/create" || topic.link !== "/update"));
        
            // newTopic이 undefined가 아닌 경우에만 실행
            if(newTopic){
                currentTopic.current = newTopic;
            }
    });

    // 각 topic에 대한 라우팅 경로 설정
    const routeList = topics.map(topic => {
        const {link,title,body,img} = topic;
        return(
            <Route 
                key = {link}
                path={link}
                element={<Content title={title} body={body} img={img}/>}
            />
        );
    });


    // topic 삭제 기능
    const onDelete = () =>{
        setTopics(topics.filter(topic=> topic.link !== currentTopic.current.link));
        navigate('/');  // 삭제 완료 후 메인 페이지로 이동
    }

    return (
        <>
        <div className='flex-between header'>
            <Header />
            <Nav topics={topics}/>
        </div>

            <Routes>
                <Route path='/' element={<Content title="Welcome" body="web is ..." img="img/web.png"/>}></Route>
                {routeList}
                <Route path='/create' element={<Create topics={topics} setTopics={setTopics}/>}/>
                <Route path='/update' element={<Update currentTopic={currentTopic.current} topics={topics} setTopics={setTopics}/>}/>
            </Routes>

            <Footer currentTopic={currentTopic.current}onDelete={onDelete}/>
        </>
    );
}

export default Page;