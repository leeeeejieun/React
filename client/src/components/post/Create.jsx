import React from 'react';
import { v4 as uuid4 } from 'uuid';
import { TopicForm } from './TopicForm';
import { createPost } from 'api';

const Create = ({createTopic}) => {
    
     // topic 생성 기능
     const onCreate = (topicData) =>{
        createPost(topicData); // 게시글 추가 api 요청

        const newTopic = {
            ...topicData,
            link : `/new${uuid4()}`,
        }
        createTopic(newTopic);  
    }

    return(
       <TopicForm onSubmit={onCreate} action={"create"}/>
    );
}

export default Create;

