import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChangeInner, ChangeWrapper, TextArea, Button, Title, Input} from '../styles/Change';

const Update = ({ topics, setTopics}) => {
    const [updateTopic, setUpdateTopic] = useState(JSON.parse(localStorage.getItem("currentTopic")));
    const {title, body} = updateTopic;
    const navigate = useNavigate();

    const onChange = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        setUpdateTopic({
            ...updateTopic,
            [id] : value
        });
        /*
         []를 이용해 속성 이름을 동적으로 설정 가능 ( title : value로 인식)
         속성 이름이 이미 존재하는 경우 값을 덮어씌움
         */
    }

    // topic 내용 변경 기능
    const onUpdate = (updateTopic) =>{
        const newTopics = topics.map(topic =>(
        topic.link === updateTopic.link ? updateTopic : topic
        ));
        setTopics(newTopics);
        navigate(updateTopic.link);
    }

    return(
        <ChangeWrapper>
            <Title>Update</Title>
            <ChangeInner  className="flex-colum" onSubmit={event=>{
                event.preventDefault();
                onUpdate(updateTopic);
            }}>
                <Input type="text" id = "title" value={title} onChange={onChange}/>
                <TextArea id = "body" value={body} onChange={onChange}></TextArea>
                <Button>Update</Button>
            </ChangeInner>
        </ChangeWrapper>
        
    );
}

export default Update;