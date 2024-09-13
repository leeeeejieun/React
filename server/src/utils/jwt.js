"use strict";

const jwt = require('jsonwebtoken'); 
const secretKey = process.env.JWT_SECRET_KEY;

// JWT 토큰 생성
const generateToken = (payload) => {
    const token = jwt.sign(payload, secretKey, {expiresIn: '1h'}); // 토큰 만료 시간을 1시간으로 설정
    return token;
}

module.exports = generateToken;