import React from 'react';

const Create = ({onCreate}) => {
    return(
        <article className="change">
            <h3>Create</h3><br />
            <form onSubmit={event=>{
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                onCreate(title, body);
            }}>
                <p><input type="text" name="title" placeholder="title"/></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><button>Create</button></p>
            </form>
        </article>
    )
}

export default Create;