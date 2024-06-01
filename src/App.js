import {Header, Nav, Article} from './main.js'
import { useState } from 'react';
import './App.css'

const topics =  [
  {id: 1,title : "html", body: "html is ...", img: "./img/html.png"},
  {id: 2,title : "css", body: "css is ...", img: "./img/css.png"},
  {id: 3,title : "javascript", body: "js is ...", img: "./img/js.png"}
];


const App = ()=>{
  const [id, setId] = useState(null);
  const [mode, setMode] = useState("Welcome");
  let img,content = null;

  if(mode === "Welcome"){
    img = require('./img/web.png');
    content = <Article title="welcome" body="Hello, WEB"/>
  }

  else if(mode === "Read"){
      topics.map((topic)=>{
        if(id === topic.id){
          img = require(`${topic.img}`);
          content = <Article title={topic.title} body={topic.body}/>
          console.log(topic.id)
          }
        }
      )
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
        <img src={img}/>
        {content}
      </div>
    </>
  );
}

export default App;

