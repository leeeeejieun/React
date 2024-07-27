import React from "react";
import styled from "styled-components";

export const Student = ({name, dispatch, id, isHere}) =>{
    return(
        <>
            <Check isHere={isHere} onClick={()=>{
                dispatch({type: 'checkStudent', payload: {id}})
            }}>{name}</Check>
            <button onClick={()=>{
                dispatch({type: 'deleteStudent', payload: {id}})
            }}>삭제</button>
            <br />
        </>
    );
}

const Check = styled.span`
    color: ${props => props.isHere ? 'gray' : 'black'};
    text-decoration: ${props => props.isHere ? 'line-through' : 'none'}
`