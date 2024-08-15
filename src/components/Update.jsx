import React, { useState } from 'react';
import { ChangeInner, ChangeWrapper, TextArea, Button, Title, Input} from '../styles/change';
import { UploadImage } from './UploadImage';

const Update = ({updateTopic, currentTopic}) => {
    const [udTopic, setUdTopic] = useState(currentTopic);;
    const {title, body, img} = udTopic;   // 구조 분해 할당 변수명은 해당 객체의 키와 동일해야한다.

    const onChange = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        setUdTopic({
            ...udTopic,
            [id] : value
        });
        /*
         []를 이용해 속성 이름을 동적으로 설정 가능 ( title : value로 인식)
         속성 이름이 이미 존재하는 경우 값을 덮어씌움
         */
    }

    // topic 내용 변경 기능
    const onUpdate = () => {
       updateTopic(udTopic);
    }

    // 이미지 업데이트 기능
    const onImageUpdate = (imgUrl) =>{
        setUdTopic({
            ...udTopic,
            img : imgUrl
        });
    }

    return(
        <ChangeWrapper className='flex-around'>
            <UploadImage image={img} onImageUpdate={onImageUpdate} />
            <ChangeInner  className="flex-colum" onSubmit={event=>{
                event.preventDefault();
                onUpdate();
            }}>
                <Input type="text" id = "title" value={title} onChange={onChange}/>
                <TextArea id = "body" value={body} onChange={onChange}></TextArea>
                <Button>Update</Button>
            </ChangeInner>
        </ChangeWrapper>
    );
}

export default Update;