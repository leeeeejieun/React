import React, { useState } from 'react';
import { Routes,Route, useLocation} from 'react-router-dom';
import * as Main from '@components/main'
import * as Layout from '@layout'
import { Home } from '@main/Home';
import Modal from '@ui/Modal';
import { MainPageLogic } from '@hooks/MainPageLogic';

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
    const location = useLocation();
    
    return (
        <>
            <Layout.Header topics={topics}/>

            <Routes>
                <Route path='/' element={<Home />}/>
                {routeList}
                <Route path='/create' element={<Main.Create addTopic={addTopic}/>}/>
                <Route path='/update' element={<Main.Update updateTopic={updateTopic} currentTopic={currentTopic}/>}/>
            </Routes>

            {(location.pathname !== '/create' && location.pathname !== '/update' && location.pathname !== '/' ) && <Layout.Footer openModal={openModal}/>}
            {/* <p style={{marginBottom: "30rem"}}></p>   스크롤 방지 테스트 여백 설정 */}
            <Modal modal={modal} closeModal={closeModal} deleteTopic={deleteTopic} currentTopic={currentTopic}/>
        </>
    );
}

export default MainPage;
