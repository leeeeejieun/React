"use strict";
const jwt = require("../utils/jwt")
const refresh = require("../models/TokenStorage");
const { compareSync } = require("bcrypt");

const refreshCtrl = async (req, res) => {
    try {
        // 쿠키를 통해 현재 refreshToken을 받아옴
        const refreshToken = req.cookies.refreshToken;
        
        if (!refreshToken) {
            return res.status(401).json({ message: "로그인을 해주세요." });
        }    

        // 해당 refreshToken을 가지고 있는 사용자 확인
        const user = await refresh.findUser(refreshToken);

        if(!user) {
            return res.status(403).json({ message: "RefreshToken이 유효하지 않습니다."});
        }

        // RefreshToken 유효성 검사
        const result = jwt.refreshVerify(refreshToken);
        if(!result.ok) {
            return res.status(403).json({ message: "RefreshToken이 만료되었습니다."});
        }

        // AccessToken 재발급
        const newAccessToken = jwt.sign({id : user});
        return res.status(200).json({ newAccessToken : newAccessToken });
    }catch(err) {
        return res.status(500).json({ message: "DB 오류 발생" });
    }
}

module.exports = refreshCtrl;
