import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ topics }) => {
    const linkList = useMemo(()=>{
        return topics.map(topic =>(
            <List key = {topic.link}>
                 <Link to = {`/main${topic.link}`}>{topic.title}</Link>
            </List>
        ));
    },[topics]);

    return(
            <ListWrapper>
                {linkList}
            </ListWrapper>
    );  
}

export default Nav;


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