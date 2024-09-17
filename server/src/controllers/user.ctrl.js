"use strict";

const User = require("../models/User");

// 사용자 계정과 관련된 처리 수행 (로그인, 회원가입)
const userCtrl = {
    process: {
        login : async (req, res) => {
            try {
                const user = new User(req.body);
                const response = await user.login();

                if(response.code === 200){
                // RefreshToken을 쿠키로 넘김
                    res.cookie("refreshToken", response.refreshToken, {
                        httpOnly: true,
                        secure: true,
                        maxAge: 60 * 60 * 24 * 14,   // 14일
                    });
                    // accessToken을 body로 넘김
                    res.status(response.code).json({
                        accessToken: response.accessToken
                    });
                }
                else {
                    res.status(response.code).json({message: response.message});
                }
            }catch (err) {
                res.status(400).json({message: "로그인에 실패하였습니다."});
            };
        },
        logout : async (req, res) => {
            try {
                const user = new User(req.body);
                const response = await user.logout(req.body);
                res.status(response.code).end();  // 상태 메시지를 전달하지 않음
            }catch (err) {
                res.status(401).json({message: "로그인을 하지 않았습니다."});
            };
        },
        register : async (req, res) =>{
            try {
                const user = new User(req.body);
                const response = await user.register();
                res.status(response.code).json({message: response.message});
            }catch (err) {
                res.status(400).json({message: "회원가입에 실패하였습니다."});
            };
        }
    }
};

module.exports =  userCtrl;