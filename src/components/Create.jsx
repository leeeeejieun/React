import React, { useState } from 'react';
import { ChangeInner, ChangeWrapper, TextArea, Button, Input} from '../styles/change';
import { UploadImage } from './UploadImage';
import { v4 as uuid4 } from 'uuid';
/*
   1. 문제 : 동일한 linkNumber를 가진 여러 게시글이 생성되어 key 중복 오류가 발생하고 있다.
   2. 원인 : useRef는 컴포넌트가 렌더링되는 동안 값을 유지하지만, 컴포넌트가 언마운트될 때 초기값으로 리셋된다.
            따라서 Create 컴포넌트가 언마운트되거나 재마운트될 때 linkNumber가 계속 1로 초기화 되며 같은 키 값('new01')이 반복적으로 사용된다.
   3. 해결 방법
   -  'uuid' 라이브러리를 사용하여 각 게시글에 고유한 id를 부여한다.
   -  uuid 라이브러리 설치 : npm install uuid
*/

const Create = ({addTopic}) => {
    const [image, setImage] = useState(null);         // 이미지 URL을 저장하는 state

     // topic 생성 기능
     const onCreate = (title,body) =>{
        const newTopic = {
            link : `/new${uuid4()}`,
            title : title,
            body : body,
            img : image
        }
        addTopic(newTopic);  
    }

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
