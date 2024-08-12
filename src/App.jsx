import React from 'react';
import MainPage from './pages/MainPage';
import { ThemeProvider } from './context/ThemeProvider';
import { GlobalStyle } from './styles/GlobalStyle';

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

