"use strict";
const jwt = require("../utils/jwt");

const refresh = async (req, res) => {
    // 쿠키를 통해 현재 refreshToken을 받아옴
    const refreshToken = req.cookies.refreshToken;
    
    if (!refreshToken) {
        return res.status(401).json({ message: "로그인을 해주세요." });
    }    

    // RefreshToken 유효성 검사
    const result = jwt.refreshVerify(refreshToken);
    if(result.ok) {
        // AccessToken 재발급
        const newAccessToken = jwt.sign({id : result.decoded.id});
        res.json({message: "AccessToken 재발급 완료", newAccessToken});
    }
    else {
        return res.status(403).json({ message: "RefreshToken이 만료되었습니다."});
    }
}

module.exports = refresh;