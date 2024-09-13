"use strict";

const jwt = require('jsonwebtoken'); 
const secretKey = process.env.JWT_SECRET_KEY;

// JWT 토큰 생성
const generateToken = (payload) => {
    const token =  jwt.sign(payload, secretKey, {expiresIn: '10s'}); // 테스트를 위해 10초로 설정
    return token;
}

// JWT 토큰 검증
const verifyToken = (token) => {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded; // 검증된 사용자 정보 반환
    } catch (error) {
      return null; 
    }
};

module.exports = {
    generateToken,
    verifyToken,
};