import React from 'react';
import { TopicForm } from './common/TopicForm';
import { v4 as uuid4 } from 'uuid';

const Create = ({addTopic}) => {

     // topic 생성 기능
     const onCreate = (topicData) =>{
        const newTopic = {
            ...topicData,
            link : `/new${uuid4()}`,
        }
        addTopic(newTopic);  
    }

    return(
       <TopicForm onSubmit={onCreate} action={"create"}/>
    );
}

export default Create;

