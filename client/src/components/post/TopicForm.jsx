import React, { useState } from "react";
import { UploadImage } from "./UploadImage";
import styled from "styled-components";

export const TopicForm = ({initialData = {}, onSubmit, action}) => {
    const ACTION_TYPE = action;
    const [topic, setTopic] =  useState({
        title: initialData.title || "",
        body: initialData.body || "",
        img: initialData.img || null,
    });

    const handleImageUpload = (imgUrl, imgFile) => {
        setTopic({
            ...topic,
            img : imgUrl,
            imgFile : imgFile
        });
    };

    const handelChange = (e) =>{
        const {name, value} = e.target;
        setTopic({
            ...topic,
            [name] : value,
        });
    };

    const handleSubmit = () =>{
        onSubmit(topic);
    }

    return(
    <ChangeWrapper >
        <UploadImage image={topic.img} handleImageUpload={handleImageUpload}/>
        <ChangeInner onSubmit={event =>{
            event.preventDefault();
            handleSubmit();
        }}>
            <input 
                type="text" 
                name="title" 
                value={topic.title} 
                placeholder="제목" 
                onChange={handelChange}
                required/>
            <textarea 
                name="body" 
                value={topic.body} 
                placeholder="내용" 
                onChange={handelChange}
                required/>
            <button>{ACTION_TYPE}</button>
        </ChangeInner>
    </ChangeWrapper>
    );
}

const ChangeWrapper =  styled.article`
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 3rem;
`;

const ChangeInner = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(5%);
    gap : 20px;
    
    // 자식 input 요소 스타일링
    > input {
        width: 300px;
        height: 40px;
        border: 1px solid gray;
    }

    > textarea{
        width: 300px;
        height: 250px;
        resize: horizontal;  
        border: 1px solid gray;
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