import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../../../context/ThemeProvider";
import ThemeToggle from "../ui/ThemeToggle";

const Nav = ({topics}) => {
    const [ThemeMode, toggleTheme] = useTheme();
    
    const linkList = topics.map(topic =>(
        <List key={topic.link}>
             <Link to={topic.link}>{topic.title}</Link>
        </List>
    ));    

    return(
        <Navigation className="flex-center">
            <ListWrapper className="flex-center">
                {linkList}
                <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                    DarkMode
                </ThemeToggle>
            </ListWrapper>
        </Navigation>
    );  
}

export default Nav;

/*
    & a : 모든 자손 a 태그를 선택
    & > a : 직계 자식 a 태그만 선택
*/

const List = styled.li`
     font-size: 1.3rem;
     & > a {
        display:  inline-block;
        transition: .1s;
        
        &:hover{
            transform: scale(1.1);
         }
    }
`;

const ListWrapper =  styled.ul`
    gap: 3.5rem;
    align-items: center;
`;

const Navigation = styled.nav`
    padding-right: 20px;
    gap: 3.5rem;
`;
