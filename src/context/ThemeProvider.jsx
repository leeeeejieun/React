import React from 'react';
import { lightTheme, darkTheme } from '../theme/Theme';
import { createContext, useState, useContext, useCallback } from 'react';
import { ThemeProvider as StyledProvider} from 'styled-components'; 

const ThemeContext = createContext({}); 

const ThemeProvider = ({children}) => {
     /*
      Provider 컴포넌트 제공하게 될 context 객체 생성
      테마 관련 정보를 하위 컴포넌트들에게 전달
    */

    // 테마 모드 상태 & 테마 변경 함수
    const [ThemeMode, setThemeMode] = useState('light');
    // 현재 테마 선택
    const theme = ThemeMode === 'light' ? lightTheme : darkTheme;

    return(
        <ThemeContext.Provider value={{ThemeMode, setThemeMode}}>
            {/* styled-components로 작성된 모든 컴포넌트에서 theme 객체를 사용하여 스타일 설정*/}
            <StyledProvider theme={theme}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    );
}

// custom hook을 통해 테마의 토글 기능 처리
function useTheme() {
    /* useContext는 context 객체를 인수로 전달 받아 해당 context의 현재 값을 반환하며,
       useContext를 호출한 컴포넌트는 해당 context의 값이 변경될 때마다 리렌더링됨
    */
    const context = useContext(ThemeContext);
    const {ThemeMode, setThemeMode} = context;

    const toggleTheme = useCallback(()=>{
        if(ThemeMode === "light"){
            setThemeMode("dark");
        }
        else{
            setThemeMode("light");
        };
    }, [ThemeMode]);

    return [ThemeMode, toggleTheme];
}

export {ThemeProvider, useTheme};