import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
     list-style: none;
    font-size: 1.5rem;
`;

const ListWrapper =  styled.ul`
    gap: 30px;
`;

const Nav = ({topics}) =>{
    const linkList = topics.map(topic =>(
        <List key={topic.link}>
             <Link to={topic.link}>{topic.title}</Link>
        </List>
    ));    


    return(
        <nav>
            <ListWrapper className="flex-center">
                {linkList}
            </ListWrapper>
        </nav>
    );  
}

export default Nav;
