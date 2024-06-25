import React from "react";
import styled from "styled-components";

const Title = styled.h3`
    font-size: 2rem;
`;

const Body =  styled.p`
    padding-top: 20px;
    font-size: 1.3rem;
`;

const TopicWrapper = styled.div`
    margin-top : 5.5rem;
`;

const Image = styled.img`
    width : 300px;
    height : 250px;
`;

const Topic = ({title,body,img}) =>{
    return(
        <TopicWrapper className="flex-around">
            <Image src={`${process.env.PUBLIC_URL}${img}`} alt="img error"/>
                <article>
                    <Title>{title}</Title>
                    <Body>{body}</Body>
                </article>
        </TopicWrapper>
    );
}

export default Topic;
