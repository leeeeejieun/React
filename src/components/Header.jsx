import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled.header`
    font-size : 2.5rem;
    font-weight: 600;
    padding-left: 30px;
`;

const Header = () =>{
    return(
        <StyledHeader>
            <Link to='/' >WEB</Link>
        </StyledHeader>
    );
}

export default Header;

