import React from 'react';
import { useState } from 'react';
import { ChangeInner, ChangeWrapper } from './Change';

const Update = ({nowTopic,onUpdate}) => {
    const[updateTopic,setUpdateTopic] = useState(nowTopic);
    const {title, body} = updateTopic;

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

    return(
        <ChangeWrapper>
            <h3>Update</h3><br />
            <ChangeInner  className="flex-colum" onSubmit={event=>{
                event.preventDefault();
                onUpdate(updateTopic);
            }}>
                <input type="text" id = "title" value={title} onChange={onChange}/>
                <textarea id = "body" value={body} onChange={onChange}></textarea>
                <button>Update</button>
            </ChangeInner>
        </ChangeWrapper>
        
    );
}

export default Update;