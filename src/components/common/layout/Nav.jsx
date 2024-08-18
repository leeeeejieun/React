import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = ({topics}) => {
    
    const linkList = topics.map(topic =>(
        <List key={topic.link}>
             <Link to={topic.link}>{topic.title}</Link>
        </List>
    ));    

    return(
            <ListWrapper>
                {linkList}
            </ListWrapper>
    );  
}

export default Nav;

/*
    & a : 모든 자손 a 태그를 선택
    & > a : 직계 자식 a 태그만 선택
*/

const ListWrapper =  styled.ul`
    display: flex;
    align-items: center;
    gap: 3.5rem;
`;

const List = styled.li`
     font-size: 1.3rem;
     > a {
        display:  inline-block;
        transition: .1s;
        
        &:hover{
            transform: scale(1.1);
         }
    }
`;