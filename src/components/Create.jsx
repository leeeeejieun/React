import React from 'react';
import { ChangeInner, ChangeWrapper } from './Change';

const Create = ({onCreate}) => {
    return(
        <ChangeWrapper>
            <h3>Create</h3><br />
            <ChangeInner className="flex-colum" onSubmit={event=>{
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                onCreate(title, body);
            }}>
                <input type="text" name="title" placeholder="title"/>
                <textarea name="body" placeholder="body"></textarea>
                <button>Create</button>
            </ChangeInner>
        </ChangeWrapper>
    )
}

export default Create;