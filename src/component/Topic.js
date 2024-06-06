import React from "react";
import Article from "../component/Article";

const Topic = ({title,body,img}) =>{
    return(
        <div className="wrapper">
            <img src={`${process.env.PUBLIC_URL}${img}`}/>
            <Article title={title} body={body}/>
        </div>
    );
}

export default Topic;