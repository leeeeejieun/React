import { useState } from "react";
const Update = ({onUpdate, title, body}) =>{
    // 부모에게 받은 prop은 변경할 수 없기 때문에 state 사용
    const [_title, setTitle] = useState(title);
    const [_body, setBody] = useState(body);

    return(
        <article>
            <h3>Update</h3><br />
            <form onSubmit={(event)=>{
                event.preventDefault();
                onUpdate(_title, _body);  // 부모 컴포넌트에게 변경된 title, body 전달
                
            }}>
                <input type="text" name="title" value={_title} onChange={event=>{  // 키보드를 입력할 때마다 onChange 발생
                    setTitle(event.target.value);
                 }
                }/><br/><br/>
                <textarea name="body" value={_body} onChange={event=>{
                    setBody(event.target.value);
                }}></textarea><br />
                <input type="submit" value="Update"/>
            </form>
        </article>
    )
}

export default Update;