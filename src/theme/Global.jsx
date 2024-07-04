import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";  // 모든 브라우저에서 일괄적인 스타일링 제공

// 전역 컴포넌트 스타일링
export const GlobalStyle = createGlobalStyle`
   ${reset}
   body {
        background: ${({theme}) => theme.bgColor};
        color: ${({theme}) => theme.textColor};
        transition: .5s;
   }
`;