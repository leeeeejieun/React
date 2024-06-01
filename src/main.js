const Header = ({onChangeMode}) =>{
    return(
        <header>
            <h3>
                <a href="/main" onClick={(event)=>{
                        event.preventDefault(); 
                        onChangeMode();
                    }
                }>WEB</a>
            </h3>
        </header>
    );
}

const Nav = ({title, onChangeMode})=>{
    const topicList = title.map((topic)=>
        <li key={topic.id}>
            <a href={("/read"+topic.id)} onClick={(event)=>{
                event.preventDefault();
                onChangeMode(topic.id);
            }}>{topic.title}</a>
        </li>
    );
    return(
       <nav>
        <ul>
            {topicList}
        </ul>
       </nav>
    );   
}

const Article = ({title,body})=>{
    return(
        <article>
            <h3>{title}</h3>
            <p>{body}</p>
        </article>
    );
}


export {Header, Nav, Article};