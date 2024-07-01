import React from "react";
import styled from "styled-components";

const ThemeToggle = ({toggle, mode}) => {
    return(
    <ToggleWrapper onClick={toggle} mode={mode}>
        {mode === 'dark' ? '🌛' : '🌞'}
    </ToggleWrapper>
    );
};

export default ThemeToggle;

const ToggleWrapper = styled.button`
   font-size: 20px;
   width: 80px;
   height: 40px;
   border-radius: 30px;
   background-color: ${props => props.theme.bgColor};
   box-shadow: ${
    props => props.mode === 'dark' ? '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
    : '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
  };
  transition: .8s;
`;