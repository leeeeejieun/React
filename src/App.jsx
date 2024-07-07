import React from 'react';
import Main from './pages/Main';
import './App.css'
import { GlobalStyle } from './theme/Global';
import { ThemeProvider } from './context/ThemeProvider';

/*
    Context는 앱 내에서 전역적으로 사용되는 데이터를 여러 컴포넌트끼리 쉽게 공유할 수 있는 방법을 제공한다.
    따라서 props를 통해 데이터를 일일이 전달할 필요 없이,
    해당 데이터를 갖고 있는 상위 컴포넌트가 하위 컴포넌트들에게 쉽게 데이터를 전달할 수 있다.

    예를 들어, 사용자 정보를 여러 컴포넌트에서 필요로 하는 경우
    Context를 사용하면 필요한 모든 컴포넌트에서 해당 데이터를 접근할 수 있다.

*/


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