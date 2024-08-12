import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";  // 모든 브라우저에서 일괄적인 스타일링 제공

// 전역 컴포넌트 스타일링
export const GlobalStyle = createGlobalStyle`
   ${reset}
   
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif;
    cursor: pointer;
   }

   body {
        -ms-overflow-style: none;
        background: ${({theme}) => theme.bgColor};
        color: ${({theme}) => theme.textColor};
   }
   ::-webkit-scrollbar {
     display: none;
   }
   
   
   a{
      text-decoration: none;
      color: inherit;  /* 부모 요소에게 상속 받은 값을 사용*/
   }

   ul,
   li{
      list-style: none;
   }

   button{
      border: none;
   }

   .flex-center{
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .flex-around{
      display: flex;
      justify-content: space-around;
      align-items: center;
   }

   .flex-between{
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .flex-colum{
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .flex-end {
      display: flex;
      justify-content: flex-end;
   }
`;