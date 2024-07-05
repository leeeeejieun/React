import React, { useState, useRef, useEffect, useMemo} from 'react';
import { Routes,Route} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom"
import Content from '../components/Content';
import Create from '../components/Create';
import Update from '../components/Update';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

/* 
    useMemo는 재렌더링 사이에 계산 결과를 캐싱할 수 있게 해주는 React Hook이다.
    동일한 값을 리턴하는 함수를 반복적으로 호출할 때,
    첫 번째로 계산한 값을 메모리에 저장하여 이후 계산을 재수행하지 않고, 메모리에 저장된 값을 사용하도록 한다.
    즉, 값이 변경되지 않는 한 메모이제이션된 값을 재사용함으로써 성능을 최적화하는 데 도움을 준다.

    기본 구조는 다음과 같다.
    const cachedValue = useMemo(콜백함수, 의존성 배열)

    콜백 함수 : 캐싱하려는 값을 계산 후 '반환'하는 함수
    의존성 배열 : 해당 배열 내의 값들이 변경될 때만 콜백 함수를 다시 실행하여 cachedValue 업데이트
                따라서 배열 내의 값들이 변경되지 않으면 이전에 계산된 값을 재사용한다.

    * 예시
        const memoizedValue = useMemo(() => {
            // 복잡한 계산 수행
            return computeExpensiveValue(a, b);
        }, [a, b]);
    
    첫 렌더링 시 computeExpensiveValue(a, b)가 호출되어 결과가 memoizedValue에 저장된다.
    이후 렌더링에서 'a' 또는 'b'가 변경되지 않으면 이전에 저장된 memoizedValue을 반환하며,
    변경된 경우 computeExpensiveValue(a, b)가 다시 호출되고 새로운 결과가 memoizedValue에 저장되어 반환된다.
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


    // topic 삭제 기능
    const onDelete = () =>{
        setTopics(topics.filter(topic=> topic.link !== currentTopic.current.link));
        navigate('/');  // 삭제 완료 후 메인 페이지로 이동
    }

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

            <Footer currentTopic={currentTopic.current}onDelete={onDelete}/>
        </>
    );
}

export default Page;

const Wrapper = styled.div`
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.textColor};
    border-bottom: 1px solid black;
    padding: 10px;
    transition: .5s;
`;
