import styled from "styled-components";

export const ChangeWrapper =  styled.article`
    padding: 3rem;
    text-align: center;
`;

export const ChangeInner = styled.form`
    gap : 20px;
`

export const TextArea = styled.textarea`
     width: 300px;
     height: 200px;
     resize: horizontal;   // 가로 크기만 조절 가능, 세로 크기는 고정
`;

export const Button = styled.button`
    width: 300px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 30px;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
`;

export const Input = styled.input`
     width: 300px;
     height: 40px;
`

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 800;
    padding-bottom: 1.5rem;
`;