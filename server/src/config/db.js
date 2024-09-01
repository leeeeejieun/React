"use strict";

const mysql = require("mysql2");

// DB 연결 설정
const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

// DB 연결 요청
db.connect();

module.exports = db;