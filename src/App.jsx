import React from 'react';
import Main from './pages/Main';
import './App.css'
import { GlobalStyle } from './theme/Global';
import { ThemeProvider } from './context/ThemeProvider';

const App = () =>{
    return(
        <>   
            <ThemeProvider>
                <GlobalStyle />
                <Main  />
            </ThemeProvider>
        </>
    );
};

export default App;