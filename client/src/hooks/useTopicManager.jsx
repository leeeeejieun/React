import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useTopicManager({ setTopics }) {
    const navigate = useNavigate();

    const createTopic = useCallback((newTopic) => {
        setTopics(prevTopics => [...prevTopics, newTopic]);
        navigate(`/main${newTopic.link}`);
    }, [navigate, setTopics]);

    const updateTopic = useCallback((updatedTopic) => {
        setTopics(prevTopics =>
            prevTopics.map(topic =>
                topic.link === updatedTopic.link ? updatedTopic : topic
            )
        );
        navigate(`/main${updatedTopic.link}`);
    }, [navigate, setTopics]);

    const deleteTopic = useCallback((topicToDelete) => {
        setTopics(prevTopics =>
            prevTopics.filter(topic => topic.link !== topicToDelete.link)
        );
        navigate(-1);
    }, [navigate, setTopics]);

    return { createTopic, updateTopic, deleteTopic };
}
