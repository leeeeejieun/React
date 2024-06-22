import React from "react";
import Article from "./Article";
import styled from "styled-components";

const TopicWrapper = styled.div`
    margin-top : 5.5rem;
`;

const Image = styled.img`
    width : 250px;
    height : 220px;
`;

const Topic = ({title,body,img}) =>{
    return(
        <TopicWrapper className="flex-around">
            <Image src={`${process.env.PUBLIC_URL}${img}`} alt="img error"/>
            <Article title={title} body={body}/>
        </TopicWrapper>
    );
}

export default Topic;