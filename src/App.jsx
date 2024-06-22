import React, { useState} from 'react';
import { Routes,Route} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Topic from './components/Topic';
import Create from './components/Create';
import Update from './components/Update';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css'
// rfc + tab 키 => 기본 구조 제공
const App = () => {

    const initTopic = () =>{
        return([ 
            {link: "html", title: "HTML", body: "html is ...", img: "img/html.png"},
            {link: "css", title: "CSS", body: "css is ...", img: "img/css.png"},
            {link: "js", title: "JavaScript", body: "js is ...", img: "img/js.png"}
        ]);
    };
    
    const [topics, setTopics] = useState(initTopic);  // 초기값을 콜백 함수로 주면 처음 렌더링 될 때만 useState 호출
    const [nowTopic, setNowTopic] =  useState([]);    // 현재 페이지의 topic 저장
    const navigate = useNavigate();                   // 특정 이벤트가 발생할 때 주소를 이동시키는 기능 제공

    // 각 topic에 대한 라우팅 경로 설정
    const routeList = topics.map(topic => {
        const {link,title,body,img} = topic;
        return(
            <Route 
                key = {link}
                path={`/${link}`}
                element={<Topic title={title} body={body} img={img}/>}
            />
        );
    });

    const setTopic = (topic) =>{
        setNowTopic(topic);
    }

    // topic 생성 기능
    const onCreate = (title,body) =>{
        const newTopic = {
            link : title.toLocaleLowerCase(),
            title : title,
            body : body,
            img : "img/create.jpg"
        }
        setTopics([...topics,newTopic]);   
        navigate(`/${newTopic.link}`);     // create 완료시 생성된 topic 링크로 이동
        setNowTopic(newTopic);
    }

    // topic 내용 변경 기능
    const onUpdate = (updateTopic) =>{
       const newTopics = topics.map(topic =>(
        topic.link === updateTopic.link ? updateTopic : topic
       ));
       setTopics(newTopics);
       navigate(`/${updateTopic.link}`);
       setNowTopic(updateTopic);
    }

    // topic 삭제 기능
    const onDelete = () =>{
        setTopics(topics.filter(topic=> topic.link !== nowTopic.link));
        navigate('/');  // 삭제 완료 후 메인 페이지로 이동
    }

    return (
        <>
            <Header />

            <Nav topics={topics} setTopic={setTopic}/>

            <Routes>
                <Route path='/' element={<Topic title="Welcome" body="web is ..." img="img/web.png"/>}></Route>
                {routeList}
                <Route path='/create' element={<Create onCreate={onCreate}/>}/>
                <Route path='/update' element={<Update nowTopic={nowTopic} onUpdate={onUpdate}/>}/>
            </Routes>

            <Footer onDelete={onDelete}/>
        </>
    );
}

export default App;