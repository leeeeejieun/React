import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Nav from "./Nav";
import ThemeToggle from '@ui/ThemeToggle'; 
import { useTheme } from '@context/ThemeProvider';

const Header = ({topics}) =>{
    const [ThemeMode, toggleTheme] = useTheme();

    return(
        <Wrapper>
            <Link to='/' >HOME</Link>
            <Inner>
                <Nav topics={topics}/>
                <ThemeToggle mode={ThemeMode} toggle={toggleTheme}/>
            </Inner>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 10px;
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.textColor};
    > a{
        font-size : 2rem;
        font-weight: 600;
        padding-left: 30px;
    }
`

const Inner = styled.div`
    display: flex;
    justify-content: center;
    gap : 3.5rem;
`