import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = () =>{
    return(
        <StyledHeader>
            <Link to='/' >HOME</Link>
        </StyledHeader>
    );
}

export default Header;

const StyledHeader = styled.header`
    font-size : 2rem;
    font-weight: 600;
    padding-left: 30px;
`;
