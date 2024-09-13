"use strict";
const { verifyToken } = require("../utils/jwt");

// 토큰 유효성 검증
const authToken = (req, res, next) => {
    if (req.headers.authorization) {
        // Authorization 헤더에서 토큰 추출
        const token = req.headers.authorization.split('Bearer ')[1]; 
        
        if(!token){
            res.status(401).json({error : "토큰이 없습니다."});
        }

        const decoded = verifyToken(token);
        if(decoded) {
            req.user = decoded;  // 요청 객체에 사용자 정보 추가
            next();   // 다음 미들웨어로 이동
        }
        else {
            res.status(401).json({error : "유효하지 않은 토큰입니다."});
        }
    };
};

module.exports = authToken;