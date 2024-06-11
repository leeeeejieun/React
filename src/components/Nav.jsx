import React from "react";
import { Link } from "react-router-dom";

const Nav = ({topics, setTopic}) =>{
    const linkList = topics.map(topic =>(
        <li key={topic.link}>
        <Link to={`/${topic.link}`} onClick={()=>{setTopic(topic)}} >{topic.link}</Link>
        </li>
    ));    


    return(
        <nav>
            <ul>
                {linkList}
            </ul>
        </nav>
    );  
}

export default Nav;
