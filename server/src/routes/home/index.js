"use strict";

// 모듈
const express = require("express");
const router = express.Router();

const userCtrl = require("../../controllers/user.ctrl");
const authToken = require("../../middlewares/authJWT");

router.post("/login", userCtrl.process.login);
router.post("/register", userCtrl.process.register);
// 테스트용 라우터
router.get("/test",authToken, (req,res)=>{
    res.send("인증된 사용자만 접근 허용")
})

module.exports = router;