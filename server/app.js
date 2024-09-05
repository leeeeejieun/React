"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

// 미들웨어
app.use(cors());
app.use(express.json());                          
app.use(express.urlencoded({ extended: false }));  
app.use("/", home);    // 루트 경로로 들어온 요청을 home 라우터로 전달

module.exports = app;