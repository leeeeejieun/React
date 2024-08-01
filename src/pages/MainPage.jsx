import React, { useState } from 'react';
import { Routes,Route} from "react-router-dom";
import Content from '../components/Content';
import Create from '../components/Create';
import Update from '../components/Update';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import styled from 'styled-components';
import { MainPageLogic } from '../hooks/MainPageLogic';
const MainPage = () => {

    const {
        topics,
        addTopic,
        updateTopic,
        deleteTopic,
        currentTopic,
        routeList,
    } =  MainPageLogic();

    const [modal, setModal] = useState(false);        // 모달 상태 관리를 위한 값
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    
    return (
        <>
            <Wrapper className='flex-between'>
                <Header />
                <Nav topics={topics}/>
            </Wrapper>

            <Routes>
                <Route path='/' element={<Content title="Welcome" body="web is ..." img="img/web.png"/>}></Route>
                {routeList}
                <Route path='/create' element={<Create addTopic={addTopic}/>}/>
                <Route path='/update' element={<Update updateTopic={updateTopic} currentTopic={currentTopic}/>}/>
            </Routes>

            <Footer openModal={openModal}/>
            <p style={{marginBottom: "30rem"}}></p>   {/* 스크롤 방지 테스트 여백 설정*/}
            <Modal modal={modal} closeModal={closeModal} deleteTopic={deleteTopic} currentTopic={currentTopic}/>
        </>
    );
}

export default MainPage;

const Wrapper = styled.div`
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.textColor};
    border-bottom: 1px solid black;
    padding: 10px;
`;
