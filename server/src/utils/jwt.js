"use strict";
const jwt = require('jsonwebtoken'); 
const secretKey = process.env.JWT_SECRET_KEY;

module.exports = {
  // AccessToken 발급
  sign: (payload) => {
      return jwt.sign(payload, secretKey, {
        algorithm: "HS256",
        expiresIn: '30m'  
      });
  },
  // Access Token 유효성 검사
  verify: (token) => {
    let decoded = null;
    try {
      decoded = jwt.verify(token, secretKey);
      return {
        ok: true,
        decoded,    // 검증된 사용자 정보 반환
      };
    } catch (error) {
      return {
        ok: false,
        message : error.message,
      };
    }
  },
  // AccessToken 만료 시 재발급을 위해 사용되는 RefreshToken 생성
  refresh: () => {
    // refresh token은 payload 없이 발급
    return jwt.sign({}, secretKey, {
      algorithm: "HS256",
      expiresIn: "14d",    // 보통 2주로 설정
    });
  },
  // RefreshToken 유효성 검사
  refreshVerify: (token) =>{
    try {
      const decoded = jwt.verify(token, secretKey);
      return{
        ok: true,
        decoded,
      };
    }catch(error) {
      return {
        ok: false,
        message : error.message,
      };
    }
  }
};