import React from 'react';
import { TopicForm } from './TopicForm';

const Update = ({updateTopic, currentTopic}) => {

    // topic 내용 변경 기능
    const onUpdate = (topicData) => {
       updateTopic({
            ...topicData,
            link: currentTopic.link
       });
    }

    return(
        <TopicForm initialData={currentTopic} onSubmit={onUpdate} action="update" />
    );
}

export default Update;