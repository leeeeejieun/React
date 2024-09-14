"use strict";
const jwt = require("../utils/jwt");

// 토큰 유효성 검증
const authToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Authorization 헤더가 없거나 'Bearer'로 시작하지 않는 경우
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "로그인을 해주세요." });
        }

        // Authorization 헤더에서 토큰 추출
        const token = authHeader.split('Bearer ')[1]; 

        // AccessToken 유효성 검사
        const result = jwt.verify(token);

        if (result.ok) {
            req.user = result.decoded;  // 요청 객체에 사용자 정보 추가
            next();   // 다음 미들웨어로 이동
        } else {
            res.status(401).json({ message: "AccessToken이 만료되었습니다." });
        }
    } catch (error) {
        return res.status(401).json({ message: "로그인을 해주세요." });
    }
};

module.exports = authToken;
