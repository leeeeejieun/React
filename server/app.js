"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes");

// 미들웨어
app.use(cors({
    origin: 'http://localhost:3000', // 클라이언트 도메인
    credentials: true // 쿠키와 같은 인증 정보를 허용
}));
app.use(cookieParser());                     
app.use(express.json());     
app.use(express.urlencoded({ extended: false }));  
app.use("/", home);    // 루트 경로로 들어온 요청을 home 라우터로 전달

module.exports = app;