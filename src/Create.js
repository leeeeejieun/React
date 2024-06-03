const Create = ({onSubmit}) => {
    return(
        <article>
            <h3>Create</h3><br />
            <form onSubmit={(event)=>{
                event.preventDefault();
                const title = event.target.title.value; // form 태그에서 input의 name값이 title은 태그의 value 값을 가져옴
                const body  = event.target.body.value;
                onSubmit(title, body);  // 부모 컴포넌트에 인수 전달
                
            }}>
                <input type="text" name="title" placeholder="title" /><br />
                <p></p><textarea name="body" placeholder="body"></textarea><br />
                <input type="submit" value="Create"/>
            </form>
        </article>
    )
}

export default Create;  