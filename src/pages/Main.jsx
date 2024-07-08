import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { Routes,Route} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom"
import Content from '../components/Content';
import Create from './Create';
import Update from './Update';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';
 
/* 
    useCallback은 리렌더링 간에 함수 정의를 캐싱해 주는 React Hook이다.

    컴포넌트가 처음 렌더링 될 때 함수 객체를 생성하고 캐싱한다.
    이후 리렌더링이 발생할 때, 의존성 배열에 변화가 없다면 새로운 함수를 생성하지 않고
    이전에 캐싱된 함수 객체를 재사용한다.
    이를 통해 불필요한 함수 재생성을 방지하고 성능을 최적화 할 수 있다.

    기본 구조는 다음과 같다.
    const cachedFn = useCallback(함수, 의존성배열)

*/
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

    // 렌더링될 때마다 currentTopic.current 값 변경이 이루어짐
    useEffect(() => {
        const newTopic = topics.find(topic => 
            topic.link === location.pathname && (topic.link !== "/create" || topic.link !== "/update"));
        
            // newTopic이 undefined가 아닌 경우에만 실행
            if(newTopic){
                currentTopic.current = newTopic;
            }
    });

     /* 
        각 topic에 대한 라우팅 경로 설정

        ! 주의사항 
        () => { 와 같은 화살표 함수는 useMemo가 객체가 아닌 undefined를 반환한다.
        자바스크립트의 () => { 는 화살표 함수의 본문의 시작을 의미하므로,
        실수를 방지하기 위해 return문을 명시적으로 작성하자.
    */
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


    /* 
        topic 삭제 기능

        Page 컴포넌트가 재렌더링 되면 Page 내 모든 내부 변수가 초기화된다.
        onDelete도 렌더링 시 콜백 함수를 재할당 받는다.
        따라서 useCallback을 통해 콜백 함수를 메모이제이션 하도록 한다.

        useEffect(() => {
            console.log('onDelete 함수가 재할당되었습니다.');
        }, [onDelete]); 
        => 확인 시 렌더링마다 함수 재할당이 이루어지고 있다.

        * onDelete 함수는 topics 배열의 내부 값들이 변화할 때만 함수가 새롭게 생성되고 재할당된다.
    */

    const onDelete = useCallback(() => {
            setTopics(topics.filter(topic=> topic.link !== currentTopic.current.link));
            navigate('/');  // 삭제 완료 후 메인 페이지로 이동
    },[topics]);
    

    useEffect(() => {
        console.log('onDelete 함수가 재할당되었습니다.');
      }, [onDelete]);

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
                <Route path='/update' element={<Update currentTopic={currentTopic.current} topics={topics} setTopics={setTopics}/>}/>
            </Routes>

            <Footer currentTopic={currentTopic.current} onDelete={onDelete} />
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
