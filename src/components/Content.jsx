import React from "react";
import styled from "styled-components";

const Topic = ({title,body,img}) =>{
    return(
        <TopicWrapper className="flex-between">
            <ImageWrapper>
                <Image src={`${process.env.PUBLIC_URL}${img}`} alt="img error"/>
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
    gap: 2.5rem;
    height: 100%;
    & h3{
        font-size: 2rem;
        font-weight: 600;
    }
    & p { 
        font-size: 1.3rem;
    }
`;

const TopicWrapper = styled.div`
    width: 80%;
    height: 250px;
    margin: 5rem auto;
`;

const ImageWrapper = styled.div`
    flex: 1;
    max-width: 350px;
`;

const Image = styled.img`
   width: 100%;
   height: auto;
`;