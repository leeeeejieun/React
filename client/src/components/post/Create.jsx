import React from 'react';
import { v4 as uuid4 } from 'uuid';
import { TopicForm } from './TopicForm';

const Create = ({createTopic}) => {

     // topic 생성 기능
     const onCreate = (topicData) =>{
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

