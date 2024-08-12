import React from "react";
import styled from "styled-components";

const Topic = ({title,body,img}) =>{
    return(
        <TopicWrapper className="flex-around">
            <ImageWrapper>
                <img src={`${process.env.PUBLIC_URL}${img}`} alt="이미지 오류"/>
            </ImageWrapper>
            <Article className="flex-colum">
                <h3>{title}</h3>
                <p>{body}</p>
            </Article>
        </TopicWrapper>
    );
}

export default Topic;


const Article = styled.article`
    flex: 1;
    transform: translateY(10%);
    gap: 2.5rem;
    & h3{
        font-size: 2rem;
        font-weight: 600;
    }
    & p { 
        font-size: 1.3rem;
    }
`;

const TopicWrapper = styled.div`
    margin-top: 3.5rem;
    padding: 0 5rem;
`;

const ImageWrapper = styled.div`
    flex: 1;
    max-width: 450px;
    height: 350px;
`;