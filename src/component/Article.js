import React from "react";

const Article = ({title,body})=>{
    return(
        <article>
            <h3>{title}</h3>
            <p>{body}</p>
        </article>
    );
}

export default Article;