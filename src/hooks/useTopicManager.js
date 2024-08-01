import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";


const initTopic = () =>{
    return([ 
        {link: "/html", title: "HTML", body: "html is ...", img: "img/html.png"},
        {link: "/css", title: "CSS", body: "css is ...", img: "img/css.png"},
        {link: "/js", title: "JavaScript", body: "js is ...", img: "img/js.png"}
    ]);
};

export function useTopicManager(){

    const [topics, setTopics] = useState(initTopic);
    const navigate = useNavigate();

    const addTopic = useCallback((newTopic)=>{
        setTopics([...topics,newTopic]);  
        navigate(newTopic.link);
    },[topics, navigate])

    const updateTopic = useCallback((udTopic)=>{
        const updateTopics = topics.map(topic =>(
            topic.link === udTopic.link ? udTopic : topic));
            setTopics(updateTopics);
            navigate(udTopic.link);
    },[topics, navigate]);

    const deleteTopic = useCallback((currentTopic)=>{
        setTopics(topics.filter(topic=> topic.link !== currentTopic.link));
        navigate('/');
    },[topics, navigate]);

    return{
        topics,
        addTopic,
        updateTopic,
        deleteTopic,
    };
};