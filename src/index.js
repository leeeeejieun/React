import React  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // 최상위 컴포넌트로 사용
// import App from './App';
import './index.css';
import App from './App';
// 라우팅 설정 전 npm install react-router-dom@6 라이브러리 설치 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);