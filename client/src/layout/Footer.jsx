import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components"

const Footer = ({openModal}) =>{
    const location = useLocation();
    
    return( 
        <FooterWrapper $path={location.pathname}>
             {/* true인 경우만 Update & Delete 추가 */}
             {location.pathname !== "/" &&   
                <> 
                <Link to='/main/create'><Button>Create</Button></Link>
                <Link to='/main/update'><Button>Update</Button></Link>
                <Button onClick={openModal}>Delete</Button>  
                </>
             }
        </FooterWrapper>
    );
}

export default Footer;

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 1.5rem;
    gap : 40px;
`;

const Button = styled.button`
    width: 300px;
    height: 40px;
    font-size : 20px;
    box-shadow: ${
    props => props.mode === 'dark' ? '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
    : '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
  };
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.textColor};
`;
