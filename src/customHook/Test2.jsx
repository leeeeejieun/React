import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFetch } from "./UseFetch";
export const Test2 = () =>{
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const {data, fetchUrl} = useFetch(BASE_URL, 'users');
    return(
        <Wrapper>
            <h1 style={{padding:"10px"}}>useFetch</h1>
            <button onClick={()=>fetchUrl('users')}>Users</button>
            <button onClick={()=>fetchUrl('posts')}>Posts</button>
            <button onClick={()=>fetchUrl('todos')}>Todos</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 20px;
`