"use strict";

// 모듈
const express = require("express");
const app = express();


app.get("/", (req, res) =>{
    res.send("루트 페이지")
});

module.exports = app;