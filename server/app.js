"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const db =  require("./src/config/db");

app.get("/", (req, res) =>{
    const query = "SELECT * FROM users";
    db.query(query, (err, data)=>{
        console.log(data[0]);
    });
    res.send("루트 페이지")
});

module.exports = app;