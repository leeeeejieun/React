import {Header, Nav, Article} from './main.js'
import { useState } from 'react';
import Create from './Create.js';
import Update from './Update.js';
import './App.css'

const App = ()=>{
  
  // 각 토픽에 대한 내용을 담은 배열
  const [topics,setTopics]  =  useState([
    {id: 1,title : "html", body: "html is ...", img: "./img/html.png"},
    {id: 2,title : "css", body: "css is ...", img: "./img/css.png"},
    {id: 3,title : "javascript", body: "js is ...", img: "./img/js.png"}
  ]); 

  const [id, setId] = useState(null);
  const [nextid, setNextId] = useState(4);       // 새로 추가되는 topic은 id 4번부터 부여
  const [mode, setMode] = useState("Welcome");   
  let img = null;
  let update, remove , content = null;


  // 초기 화면
  if(mode === "Welcome"){
    img = <img src={require('./img/web.png')} alt="img error"/>
    content = <Article title="welcome" body="Hello, WEB"/>
  }

  // topic 클릭 시 해당 topic에 대한 설명이 보이는 화면
  else if(mode === "Read"){
      topics.forEach((topic)=>{
        if(id === topic.id){
          img = <img src={require(`${topic.img}`)} alt="img error"/>
          content = <Article title={topic.title} body={topic.body}/>

          update =  
          <li className='change'><a href="/update" onClick={event =>{
            event.preventDefault();
            setMode("Update");
          }}>Update</a></li>  // mode가 Read인 경우만 update 링크가 보임
          }


          // delete 클릭 시 해당 topic 삭제
          remove =  <li className='change'>
            <button onClick={event=>{
              event.preventDefault();
              setTopics( topics.filter(topic=>topic.id!==id));
              setMode("Welcome");
              setNextId(nextid - 1);  // create 고려하여 topic 삭제 시 nextid 값이 1 줄어듬
            }}>Delete</button></li>
        }
      )
  }

  // 사용자의 입력값을 화면에 출력
  else if(mode === "Create"){
    /*
      참조형 state 값을 변경하기 위해선 새로운 객체로 덮어씌워야 한다.
      따라서 newTopics라는 새로운 객체를 생성 후,
      spread 연산자를 이용해 기존의 [topics의 값을 복사 + 추가할 배열의 값]을 갖도록 한다.
      이후 setState() 함수를 통해 newTopics로 state 값 변경
    */
    content = <Create onCreate = {(title, body)=>{
      const newTopic = {id: nextid, title:title, body:body, img:"./img/create.jpg" }
      const newTopics = [...topics,newTopic];
      setTopics(newTopics);
      setId(nextid);
      setNextId(nextid + 1);
      setMode("Read");  // mode를 Read로 변경하여 입력값이 바로 화면에 출력되도록 함
    }}/>
  }


  // 사용자가 입력한 값을 수정하는 모드
  else if(mode === "Update"){
    let title, body = null;
    topics.forEach((topic)=>{
      if(topic.id === id){
        title = topic.title;
        body = topic.body;
      }
    })
  
    content = <Update title={title} body={body} onUpdate = {(title,body)=>{
      let newTopics = [...topics];   // 기존 topics 배열 복사
      newTopics.forEach((topic)=>{
        if(topic.id === id){          // 일치한 topic에 대한 title, body 값 변경
          topic.title = title;
          topic.body = body;
        }
      })
      setTopics(newTopics); 
      setMode("Read");
    }}/>
  }

  return(
    <>
      <Header onChangeMode={()=>
        setMode("Welcome")
      }/>

      <Nav title={topics} onChangeMode={(id)=>{
        setMode("Read");
        setId(id);
      }}/>

      <div className='wrapper'>
        {img}
        {content}
      </div>
      
      <ul className="change-container">
        <li className='change'><a href="/create" onClick={event=>{
          event.preventDefault();
          setMode("Create");
        }}>Create</a>
        </li>

        {update}
        {remove}
      </ul>
    </>
  )
}

export default App;