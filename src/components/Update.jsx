import React from 'react';
import { useState } from 'react';

const Update = ({nowTopic,onUpdate}) => {
    const[topic,setTopic] = useState(nowTopic);
    const {title, body} = topic;
   
    const onChange = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        setTopic({
            ...topic,
            [id] : value
        });
    }

    return(
        <article className="change">
            <h3>Update</h3><br />
            <form onSubmit={event=>{
                event.preventDefault();
                onUpdate(topic);
            }}>
                <p><input type="text" id = "title" value={title} onChange={onChange}/></p>
                <p><textarea id = "body" value={body} onChange={onChange}></textarea></p>
                <p><button>Update</button></p>
            </form>
        </article>
        
    );
}

export default Update;