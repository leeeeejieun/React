import React from "react";
import styled from "styled-components";

const Content = ({title,body,img}) => {
    return(
        <TopicWrapper>
            <ImageWrapper>
                <img src = {img} alt="이미지 오류"/>
            </ImageWrapper>
            <Article>
                <h3>{title}</h3>
                <p>{body}</p>
            </Article>
        </TopicWrapper>
    );
}

export default Content;

const TopicWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 3rem;
`;

const ImageWrapper = styled.div`
   width: 400px;
   height: 350px;
`;

const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
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
