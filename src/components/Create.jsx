import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChangeInner, ChangeWrapper, TextArea, Button, Title, Input} from '../styles/Change';

const Create = ({topics, setTopics}) => {
    const linkNumber = useRef(1);                     // create로 생긴 페이지 링크 구별
    const navigate =  useNavigate();                // 특정 이벤트가 발생할 때 주소를 이동시키는 기능 제공

     // topic 생성 기능
     const onCreate = (title,body) =>{
        const newTopic = {
            link : `/new${linkNumber.current}`,
            title : title,
            body : body,
            img : "img/create.jpg"
        }
        setTopics([...topics,newTopic]);   
        linkNumber.current += 1;     
        navigate(newTopic.link);     // create 완료시 생성된 topic 링크로 이동
    }

    return(
        <ChangeWrapper>
            <Title>Create</Title>
            <ChangeInner className="flex-colum" onSubmit={event=>{
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                onCreate(title, body);
            }}>
                <Input type="text" name="title" placeholder="title"/>
                <TextArea name="body" placeholder="body"></TextArea>
                <Button>Create</Button>
            </ChangeInner>
        </ChangeWrapper>
    )
}

export default Create