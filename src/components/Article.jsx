import React from "react";
import styled from "styled-components";

const Title = styled.h3`
    font-size: 2rem;
`;

const Body =  styled.p`
    padding-top: 20px;
    font-size: 1.3rem;
`;

const Article = ({title,body})=>{
    return(
        <article>
            <Title>{title}</Title>
            <Body>{body}</Body>
        </article>
    );
}

export default Article;