import React from "react";
import styled from "styled-components";

const Input = ({
    label,
    id,
    placeholder,
    icon,
    }) => {

    return (
        <InputWrapper>
        <label htmlFor="username">{label}</label>
            <InputInner>
                {icon}
                <input type="text" id={id} placeholder={placeholder}/>                          
            </InputInner>
        </InputWrapper>
    );
} 

export default Input;


const InputWrapper = styled.div`
    > label {
        font-weight: 400;
        font-size: 15px;
        padding: .5rem 0;
        display: block;
    }
`;

const InputInner = styled.div`
    display: flex;
    gap: .5rem;
    padding: .8rem;
    background-color: rgba(255,255,255,.1);
    border-radius: 10px;

    > input { 
        background: none;
        outline: none;
        border: none;
        width: 200px;
        color: rgb(255,255,255);
    }
`