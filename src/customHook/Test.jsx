import React from "react";
import styled from "styled-components";
import { useInput } from "./UseInput";

function displayMessage(message) {
    alert(message);
}

export const Test = () =>{

    const [inputValue, handleChange, handleSubmit] = useInput("안녕", displayMessage);

    return(
        <Wrapper>
            <h1 style={{padding:"10px"}}>useInput</h1>
            <input 
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>확인</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 20px;
`