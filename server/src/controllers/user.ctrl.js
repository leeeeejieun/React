"use strict";

const User = require("../models/User");

// 사용자 계정과 관련된 처리 수행 (로그인, 회원가입)
const userCtrl = {
    process: {
        login : async (req, res) => {
            const user = new User(req.body);
            const response = await user.login();
            res.send(response);
        },
        register : async (req, res) =>{
            const user = new User(req.body);
            const response = await user.register();
            res.send(response);
        }
    }
};

module.exports = userCtrl;