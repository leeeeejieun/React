import React, { useRef } from 'react';
import { ChangeInner, ChangeWrapper, TextArea, Button, Title, Input} from '../styles/Change';

const Create = ({addTopic}) => {
    const linkNumber = useRef(1);                     // create로 생긴 페이지 링크 구별

     // topic 생성 기능
     const onCreate = (title,body) =>{
        const newTopic = {
            link : `/new${linkNumber.current}`,
            title : title,
            body : body,
            img : "img/create.jpg"
        }
        linkNumber.current += 1;   
        addTopic(newTopic);  
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