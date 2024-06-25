import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
     list-style: none;
     font-size: 1.3rem;
`;

const ListWrapper =  styled.ul`
    gap: 3.5rem;
`;

const Navigation = styled.nav`
    padding-right: 20px;
    gap: 3.5rem;
`;

const TopicLink = styled(Link)`
    display:  inline-block;
    transition: .1s;
    &:hover{
        transform: scale(1.1);
    }
`;

const Button = styled.button`
    width: 5.5rem;
`;

const Nav = ({topics}) =>{
    const linkList = topics.map(topic =>(
        <List key={topic.link}>
             <TopicLink  to={topic.link}>{topic.title}</TopicLink>
        </List>
    ));    


    return(
        <Navigation className="flex-center">
            <ListWrapper className="flex-center">
                {linkList}
            </ListWrapper>
            <Button>DarkMode</Button>
        </Navigation>
    );  
}

export default Nav;
