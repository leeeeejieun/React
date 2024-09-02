"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const User = require("./src/models/User");

app.get("/", async (req,res)=>{
    const user = new User("jieun", "1109");
    user.login();
    res.send("루트 페이지");
});
module.exports = app;