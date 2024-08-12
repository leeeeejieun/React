import React, { useEffect, useRef, useState } from 'react';
import { ChangeInner, ChangeWrapper, TextArea, Button, Title, Input} from '../styles/change';
import { UploadImage } from './UploadImage';

const Create = ({addTopic}) => {
    const [image, setImage] = useState(null);         // 이미지 URL을 저장하는 state
    const linkNumber = useRef(1);                     // create로 생긴 페이지 링크 구별

     // topic 생성 기능
     const onCreate = (title,body) =>{
        const newTopic = {
            key: linkNumber,
            link : `/new${linkNumber.current}`,
            title : title,
            body : body,
            img : image
        }
        linkNumber.current += 1; 
        console.log(linkNumber.current);  
        addTopic(newTopic);  
    }

    useEffect(()=>{
        console.log("렌더링 발생")
    },) 
    const onImageUpload = (imgUrl) =>{
        setImage(imgUrl);
    }

    return(
        <ChangeWrapper className='flex-around'>
            <UploadImage image={image} onImageUpload={onImageUpload} />
            <ChangeInner className="flex-colum" onSubmit={event=>{
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                onCreate(title, body);
            }}>
                <Input type="text" name="title" placeholder="제목" required/>
                <TextArea name="body" placeholder="내용" required></TextArea>
                <Button>Create</Button>
            </ChangeInner>
        </ChangeWrapper>
    )
}

export default Create;
