import React, { useState, useReducer } from "react";
import styled from "styled-components";

/*
    useReducer란 useState와 같이 state를 관리하는 Hook이다.
    useState보다 더 복잡한 로직의 상태를 관리하는데 사용된다.

    <useReducer 기본 구조>
    const [state, dispatch] = useReducer(reducer, initialArg)

    reducer : 컴포넌트 외부에서 state 업데이트 방식을 지정하는 순수 함수 &
              state와 action을 인자로 받아 업데이트 된 state를 반환

    initialArg : state 초기 값

    dispatch : state 업데이트를 위해 호출되는 함수로 action 객체를 인자로 받아 reducer를 실행
 
    action : state 업데이트를 위한 정보를 갖는 객체

*/

const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw',
}

const reducer = (state, action) =>{
   switch(action.type){
    case ACTION_TYPES.deposit:
        return state + action.payload;  
    case ACTION_TYPES.withdraw:
        return state - action.payload;
    default :
        return state;
   }
}

export const ReducerTest = () =>{
    const [num, setNum] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);

    return(
        <Wrapper>
            <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
            <br />
            <p>잔고: {money}원</p>
            <br />
            <input
                type="number" 
                value={num}
                onChange={event => setNum(Number(event.target.value))}
                step="1000"
            />
            <button onClick={()=>{
                dispatch({type: ACTION_TYPES.deposit, payload: num});
            }}>예금</button>
            <button onClick={()=>{
                dispatch({type: ACTION_TYPES.withdraw, payload: num})
            }}>출금</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 20px;
`
