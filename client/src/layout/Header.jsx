import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "components/ThemeToggle";
import { useTheme } from "context/ThemeProvider";

const Header = () => {
    const [ThemeMode, toggleTheme] = useTheme();

    return (
        <Wrapper>
            <Link to='/'>HOME</Link>
            <ThemeToggle mode={ThemeMode} toggle={toggleTheme} />
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    padding: 15px 0;
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.textColor};
    > a {
        position: fixed;
        left: 3%;
        font-size: 2rem;
        font-weight: 600;
        padding-left: 30px;
    }
`;