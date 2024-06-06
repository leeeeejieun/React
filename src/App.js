import React, { useState } from 'react';
import { Routes,Route, Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Topic from './component/Topic';
import Create from './component/Create';
import Update from './component/Update';
import './App.css'

const App = () => {
    const [nowTopic, setNowTopic] = useState("Main");

    const [topics, setTopics] = useState([
        {link: "html", title: "HTML", body: "html is ...", img: "img/html.png"},
        {link: "css", title: "CSS", body: "css is ...", img: "img/css.png"},
        {link: "js", title: "JavaScript", body: "js is ...", img: "img/js.png"}
    ]);

    const navigate = useNavigate();

    const current = (e) =>{
        const link = e.target.text;
        topics.forEach(topic=>{
            if(topic.link === link){
                setNowTopic(topic);
            }
        });
    }
    
    const linkList = topics.map(topic => (
        <li key={topic.link}>
            <Link to={`/${topic.link}`} onClick={current}>{topic.link}</Link>
        </li>
    ));

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

    const onCreate = (title,body) =>{
        const newTopic = {
            link : title.toLocaleLowerCase(),
            title : title,
            body : body,
            img : "img/create.jpg"
        }
        setTopics([...topics,newTopic]);
        navigate(`/${newTopic.link}`);   // 특정 라우팅 경로로 이동
    }

    const onUpdate = (udtopic) =>{
       const newTopics = topics.map(topic =>(
        topic.link === udtopic.link ? udtopic : topic
       ));
       setTopics(newTopics);
       setNowTopic(udtopic);
       navigate(`/${udtopic.link}`);
    }

    const onDelete = () =>{
        setTopics(topics.filter(topic=> topic.link !== nowTopic.link));
        navigate('/');
    }

    const addFooter = () =>{
        if(nowTopic !== "Main"){
            return(
                <>  
                    <Link to='/update'><button>Update</button></Link>
                    <button onClick={onDelete}>Delete</button>
                </>
            );
        }
    }

    return (
        <>
            <header>
                <Link to='/' onClick={()=>setNowTopic("Main")}>WEB</Link>
            </header>

            <nav>
                <ul>
                    {linkList}
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Topic title="Welcome" body="web is ..." img="img/web.png"/>}></Route>
                {routeList}
                <Route path='/create' element={<Create onCreate={onCreate}/>}/>
                <Route path='/update' element={<Update nowTopic={nowTopic} onUpdate={onUpdate}/>}/>
            </Routes>

            <footer>
                <Link to='/create'><button>Create</button></Link>
                 {addFooter()}
                 {console.log(nowTopic)}
            </footer>

        </>
    );
}

export default App;
