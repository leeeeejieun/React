"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const UserStorage = require("./src/modles/UserStorage");
app.get("/", async (req,res)=>{
    res.send("루트 페이지");
    console.log(await UserStorage.getUserInfo("jieun"));
});
module.exports = app;