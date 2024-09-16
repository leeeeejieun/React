"use strict";
const jwt = require("../utils/jwt")
const refresh = require("../models/TokenStorage");

const refreshCtrl = async (req, res) => {
    // 쿠키를 통해 현재 refreshToken을 받아옴
    const refreshToken = req.cookies.refreshToken;
    
    if (!refreshToken) {
        return res.status(401).json({ message: "로그인을 해주세요." });
    }    

    // DB에서 RefreshToken 조회
    const checkUser = await refresh.checkUser(refreshToken);

    if(!checkUser) {
         return res.status(403).json({ message: "RefreshToken이 유효하지 않습니다."});
    }

    // RefreshToken 유효성 검사
    const result = jwt.refreshVerify(refreshToken);
    if(!result.ok) {
        return res.status(403).json({ message: "RefreshToken이 만료되었습니다."});
    }

     // AccessToken 재발급
     const newAccessToken = jwt.sign({id : checkUser});
     res.json({message: "AccessToken 재발급 완료", newAccessToken});
}

module.exports = refreshCtrl;
