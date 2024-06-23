import React, { useState, useRef, useEffect} from 'react';
import { Routes,Route} from "react-router-dom";
import {useNavigate, useLocation} from "react-router-dom"
import Topic from './components/Topic';
import Create from './components/Create';
import Update from './components/Update';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css'
// rfc + tab 키 => 기본 구조 제공

/*
    useRef란 렌더링에 필요하지 않는 값을 참조할 수 있는 React Hook이다.
    <특징>
    1. useRef로 관리되는 값이 변경되어도 컴포넌트의 재렌더링이 발생하지 않는다.
    2. 렌더링할 때마다 재설정되는 일반 변수와 달리 리렌더링 사이에 값을 유지한다.
    3. DOM 요소에 접근하거나 조작할 때 사용된다.
    (ex input 태그의 focus를 주고싶을 때)

    useRef의 기본 구조는 다음과 같다.
    const ref = useRef(initialValue)

    initialValue : ref 객체의 current 프로퍼티 초기 설정값,
    ref.current로 값 참조 가능
    

    더 자세한 내용은 https://ko.react.dev/reference/react/useRef 여기서 확인
*/
const App = () => {
    console.log('렌더링');
    const initTopic = () =>{
        return([ 
            {link: "/html", title: "HTML", body: "html is ...", img: "img/html.png"},
            {link: "/css", title: "CSS", body: "css is ...", img: "img/css.png"},
            {link: "/js", title: "JavaScript", body: "js is ...", img: "img/js.png"}
        ]);
    };
    
    const [topics, setTopics] = useState(initTopic);  // 초기값을 콜백 함수로 주면 처음 렌더링 될 때만 useState 호출
    const currentTopic = useRef(null);                    // 현재 페이지에 대한 topic 저장
    const linkNumber = useRef(1);                     // create로 생긴 페이지 링크 구별
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
                element={<Topic title={title} body={body} img={img}/>}
            />
        );
    });

    // topic 생성 기능
    const onCreate = (title,body) =>{
        const newTopic = {
            link : `/new${linkNumber.current}`,
            title : title,
            body : body,
            img : "img/create.jpg"
        }
        setTopics([...topics,newTopic]);   
        linkNumber.current += 1;     
        navigate(newTopic.link);     // create 완료시 생성된 topic 링크로 이동
    }

    // topic 내용 변경 기능
    const onUpdate = (updateTopic) =>{
       const newTopics = topics.map(topic =>(
        topic.link === updateTopic.link ? updateTopic : topic
       ));
       setTopics(newTopics);
       navigate(updateTopic.link);
    }

    // topic 삭제 기능
    const onDelete = () =>{
        setTopics(topics.filter(topic=> topic.link !== currentTopic.current.link));
        navigate('/');  // 삭제 완료 후 메인 페이지로 이동
    }

    return (
        <>
            <Header />

            <Nav topics={topics}/>

            <Routes>
                <Route path='/' element={<Topic title="Welcome" body="web is ..." img="img/web.png"/>}></Route>
                {routeList}
                <Route path='/create' element={<Create onCreate={onCreate}/>}/>
                <Route path='/update' element={<Update currentTopic={currentTopic.current} onUpdate={onUpdate}/>}/>
            </Routes>

            <Footer currentTopic={currentTopic.current}onDelete={onDelete}/>
        </>
    );
}

export default App;