"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

app.use(express.json());                             // JSON 형식의 요청 본문을 파싱
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 필요한 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: false }));  
app.use("/", home);    // 루트 경로로 들어온 요청을 home 라우터로 전달

module.exports = app;