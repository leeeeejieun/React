import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";  // 모든 브라우저에서 일괄적인 스타일링 제공

// 전역 컴포넌트 스타일링
export const GlobalStyle = createGlobalStyle`
   ${reset}
   
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
   }

   body {
      -ms-overflow-style: none;
      overflow: hidden;
      background: ${({theme}) => theme.bgColor};
      color: ${({theme}) => theme.textColor};
   }
   ::-webkit-scrollbar {
     display: none;
   }
      
   a {
      text-decoration: none;
      color: inherit;  /* 부모 요소에게 상속 받은 값을 사용*/
      cursor: pointer;
   }

   li { 
      list-style: none;
   }

   button {
      border: none;
      cursor: pointer;
   }

   img, video {
      cursor: pointer;
      width: auto;
      height: 100%;
   }

   .message { 
      display: none;
   }

   .showMessage {
      display: block;
      color : ${props =>props.textColor};
      background-color : rgb(255,0,0);
      border-radius: 3px;
      text-align: center;
   }

`;