import styled from "styled-components";

const ChangeWrapper =  styled.article`
    padding: 3rem;
    text-align: center;
`;

const ChangeInner = styled.form`
    gap : 20px;
`

const TextArea = styled.textarea`
     min-width: 300px;
     min-height: 200px;
`;

const Button = styled.button`
    width: 300px;
    border: 1px solid gray;
    border-radius: 30px;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 800;
    padding-bottom: 1.5rem;
`;

export {ChangeInner, ChangeWrapper, TextArea, Button, Title};