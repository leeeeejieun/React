import React from 'react';
import MainPage from './pages/MainPage';
import { GlobalStyle } from './theme/Global';
import { ThemeProvider } from './context/ThemeProvider';

const App = () =>{

    return(
        <>   
            <ThemeProvider>
                <GlobalStyle />
                <MainPage  />
            </ThemeProvider>
        </>
    );
};

export default App;

