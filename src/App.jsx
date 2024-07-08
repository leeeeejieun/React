import React, { useState } from 'react';
import Main from './pages/Main';
import './App.css'
import { GlobalStyle } from './theme/Global';
import { ThemeProvider } from './context/ThemeProvider';
import Modal from './components/Modal';


const App = () =>{
    
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true)
    const closeModal = () => setModal(false);

    return(
        <>   
            {/* <ThemeProvider>
                <GlobalStyle />
                <Main  />
            </ThemeProvider> */}

            <h1>React Modal Example</h1>
            <button onClick={openModal}>Open Modal</button>
            <Modal show={modal} onClose={closeModal}></Modal>
        </>
    );
};

export default App;

