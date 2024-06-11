import React from "react";
import Article from "./Article";

const Topic = ({title,body,img}) =>{
    return(
        <div className="wrapper">
            <img src={`${process.env.PUBLIC_URL}${img}`} alt="img error"/>
            <Article title={title} body={body}/>
        </div>
    );
}

export default Topic;