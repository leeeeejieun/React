import React, {useReducer, useState} from "react";
import styled from "styled-components";
import { Student } from "./Student";

const reducer = (state, action) =>{
    switch(action.type){
        case 'addStudent':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            };
        return {
            count: state.count + 1,
            students: [...state.students, newStudent],
        };
        case 'deleteStudent':
            return{
                count: state.count - 1,
                students: state.students.filter(student => student.id !== action.payload.id),
            }
        case 'checkStudent':
            return{
                count: state.count,
                students: state.students.map(student =>{
                    if(student.id === action.payload.id){
                        return {...student, isHere: !student.isHere}
                    }
                    return student
                })
            }
        case 'default':
            return state;
    };
};

const initialState = {
    count: 0,
    students: [],
};

export const ReducerTest2 = () =>{
    const [name, setName] = useState('');
    const [studentInfo, dispatch] = useReducer(reducer, initialState);

    return(
       <Wrapper>
            <h1>출석부</h1>
            <br />
            <p>총 학생 수 : {studentInfo.count} </p>
            <br />
            <input
                type="text"
                placeholder="이름을 입력해주세요"
                onChange={event => setName(event.target.value)}
            />
            <button onClick={()=>[
                dispatch({type: 'addStudent', payload: {name}})
            ]}>추가</button>
            <br />
            {studentInfo.students.map(student =>(
                <Student 
                    key={student.id} 
                    name={student.name} 
                    dispatch={dispatch}
                    id={student.id}
                    isHere={student.isHere}
                    />
            ))}
       </Wrapper>
    );
}


const Wrapper = styled.div`
    padding: 20px;
`
