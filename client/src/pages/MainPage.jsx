import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Create from 'components/post/Create';
import Update from 'components/post/Update';
import Content from 'components/post/Content';
import Header from 'layout/Header';
import Nav from 'layout/Nav';
import Footer from 'layout/Footer';
import Modal from 'components/Modal';
import { useTopicManager } from 'hooks/useTopicManager';
import styled from 'styled-components';

// 초기 Topic 데이터 설정
const initTopic = () => [
    { link: "/html", title: "HTML", body: "html is ...", img: `${process.env.PUBLIC_URL}/img/html.png` },
    { link: "/css", title: "CSS", body: "css is ...", img: `${process.env.PUBLIC_URL}/img/css.png` },
    { link: "/js", title: "JavaScript", body: "js is ...", img: `${process.env.PUBLIC_URL}/img/js.png` },
];

const MainPage = () => {
    const [topics, setTopics] = useState(initTopic);
    const currentTopic = JSON.parse(localStorage.getItem("currentTopic")) || null;
    const [modal, setModal] = useState(false); // 모달 상태 관리
    const location = useLocation();

    // useTopicManager 훅을 사용하여 상태 및 함수 얻기
    const { createTopic, updateTopic, deleteTopic } = useTopicManager({ setTopics });

    // 경로 변경 시 currentTopic 업데이트
    useEffect(() => {
        const findCurrentTopic = topics.find((topic) =>
                `/main${topic.link}` === location.pathname &&
                topic.link !== "/main/create" &&
                topic.link !== "/main/update"
        );

        if (findCurrentTopic) {
            localStorage.setItem("currentTopic", JSON.stringify(findCurrentTopic));
        } 

    }, [location.pathname, topics]);

    // Route 리스트 생성
    const TopicList = useMemo(() => {
        return topics.map((topic) => {
            const { link, title, body, img } = topic;
            return (
                <Route
                    key={link}
                    path={link}
                    element={<Content title={title} body={body} img={img} />}
                />
            );
        });
    }, [topics]);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <>
            <Wrapper>
                <Header />
                <Nav topics={topics}/>
            </Wrapper>

            <Routes>
                {TopicList}
                <Route path='/create' element={<Create createTopic={createTopic} />} />
                <Route path='/update' element={<Update updateTopic={updateTopic} currentTopic={currentTopic} />} />
            </Routes>

            {(location.pathname !== '/create' && location.pathname !== '/update' && location.pathname !== '/') && 
                <Footer openModal={openModal} />}
            <Modal modal={modal} closeModal={closeModal} deleteTopic={deleteTopic} currentTopic={currentTopic} />
        </>
    );
};

export default MainPage;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.textColor};
    border-bottom: 1px solid black;
`;