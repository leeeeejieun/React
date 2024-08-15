import React, { useState } from "react";
import { ChangeWrapper, ChangeInner } from "../../styles/FormStyles";
import { UploadImage } from "./UploadImage";

export const TopicForm = ({initialData = {}, onSubmit, action}) => {
    const ACTION_TYPE = action;
    const [topic, setTopic] =  useState({
        title: initialData.title || "",
        body: initialData.body || "",
        img: initialData.img || null,
    });

    const handleImageUpload = (imgUrl) => {
        setTopic({
            ...topic,
            img : imgUrl,
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
    <ChangeWrapper className="flex-around">
        <UploadImage image={topic.img} handleImageUpload={handleImageUpload}/>
        <ChangeInner className="flex-colum" onSubmit={event =>{
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