import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled.header`
    text-align : center;
    font-size : 3rem;
    margin-bottom : 1.5rem;
`;

const Header = () =>{
    return(
        <StyledHeader>
            <Link to='/' >WEB</Link>
        </StyledHeader>
    );
}

export default Header;

