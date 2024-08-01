import React, {useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { useTopicManager } from "./useTopicManager";
import Content from '../components/Content';

export function MainPageLogic(){
    const {topics, addTopic, updateTopic, deleteTopic} = useTopicManager();
    const location = useLocation();
    const currentTopic = JSON.parse(localStorage.getItem('currentTopic'));

    useEffect(() => {
        const newTopic = topics.find(topic => 
            topic.link === location.pathname && (topic.link !== "/create" || topic.link !== "/update"));
        
            if(newTopic){
                localStorage.setItem("currentTopic", JSON.stringify(newTopic));
            }
    },[topics]);

    const routeList = useMemo(() => {
        return topics.map(topic => {
            const {link, title , body , img } = topic;
            return (
                 <Route 
                    key = {link}
                    path = {link}
                    element = {<Content title={title} body={body} img={img}/>}
                />
            );
        });
    },[topics]);

    return{
        topics,
        addTopic,
        updateTopic,
        deleteTopic,
        currentTopic,
        routeList,
    };
};