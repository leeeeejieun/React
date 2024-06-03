import {Header, Nav, Article} from './main.js'
import { useState } from 'react';
import Create from './Create.js';
import './App.css'

const App = ()=>{
    
  const [topics,setTopics]  =  useState([
    {id: 1,title : "html", body: "html is ...", img: "./img/html.png"},
    {id: 2,title : "css", body: "css is ...", img: "./img/css.png"},
    {id: 3,title : "javascript", body: "js is ...", img: "./img/js.png"}
  ]);  // topics에 해당 객체 배열을 저장

  const [id, setId] = useState(null);
  const [nextid, setNextId] = useState(4);  // 새로 추가되는 topic은 id 4번부터 부여
  const [mode, setMode] = useState("Welcome");
  let img,content = null;

  if(mode === "Welcome"){
    img = require('./img/web.png');
    content = <Article title="welcome" body="Hello, WEB"/>
  }

  else if(mode === "Read"){
      topics.forEach((topic)=>{
        if(id === topic.id){
          img = require(`${topic.img}`);
          content = <Article title={topic.title} body={topic.body}/>
          console.log(topic.id)
          }
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
    content = <Create onSubmit = {(title, body)=>{
      const newTopic = {id: nextid, title:title, body:body, img:"./img/create.jpg" }
      const newTopics = [...topics,newTopic];
      setTopics(newTopics);
      setId(nextid);
      setNextId(nextid + 1);
      setMode("Read");  // mode를 Read로 변경하여 입력값이 바로 화면에 출력되도록 함

    }}/>
    img = require('./img/create.jpg');
  }

  return(
    <>
      <Header onChangeMode={()=>
        setMode("Welcome")
      }/>
      <Nav title={topics} onChangeMode={(id)=>{
        setMode("Read");
        setId(id);
        console.log(id);
      }}/>
      <div className='wrapper'>
        <img src={img} alt="img error"/>
        {content}
      </div>
      <a href="/create" className='create' onClick={(event)=>{
        event.preventDefault();
        setMode("Create");
      }}>Create</a>
    </>
  );
}

export default App;
