import styled from "styled-components";

export const ChangeWrapper =  styled.article`
    padding: 3rem;
    text-align: center;
    margin-top: 2rem;
`;

export const ChangeInner = styled.form`
    gap : 20px;
    
    // 자식 input 요소 스타일링
    > input {
        width: 300px;
        height: 40px;
    }

    > textarea{
        width: 300px;
        height: 250px;
        resize: horizontal;  
    }

    > button{
        width: 300px;
        height: 40px;
        border: 1px solid gray;
        border-radius: 30px;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.textColor};
    }
`