"use strict";

const UserStorage = require("./UserStorage");
const jwt = require("../utils/jwt")
const refresh = require("../models/TokenStorage");

// 사용자 정보 처리 담당
class User {

    constructor(body){  
        this.body = body;
    }
    
    // 사용자에게 입력 받은 id와 password가 db에 저장된 정보와 일치하는 지 확인
    async login() {
        const client = this.body;
        try {
            const userInfo = await UserStorage.getUserInfo(client.id);

            // undefined인 경우
            if(!userInfo) {
                return {code: 401, message: "사용자 정보를 찾을 수 없습니다."};
            }
    
            const {id, password} = userInfo;  
            
            // id와 password가 일치한지 확인
            if (client.id === id && client.password === password){
                // JWT 토큰 생성
                const accessToken = jwt.sign({ id: id });
                const refreshToken = jwt.refresh();
                
                // DB에 refreshToken 저장
                await refresh.saveRefreshTokens(id, refreshToken);
                return {code: 200, accessToken, refreshToken};
            }
            else {
                return {code: 401, message: "비밀번호가 일치하지 않습니다."};
            }
        }catch(err) {throw err};
    };

    // 로그아웃 시 해당 사용자의 refreshToken을 DB에서 제거
    async logout() {
        try {
            const client = this.body;
            await refresh.deleteRefresh(client.id);
            return {code : 204};
        }catch(err) {throw err};
    };

    // id가 중복되지 않은 경우, 입력 받은 id, email, password를 DB에 저장하여 회원가입 처리
     async register() {
        const client = this.body;
        try {
            // id 중복 체크
            const checkUser = await UserStorage.getUserInfo(client.id);
            if(checkUser) {
                    return {code: 409, message: "이미 존재하는 아이디입니다."};
            }

            // DB에 사용자 추가 요청 
            await UserStorage.insertUser(client);
            return {code : 201};
        }catch(err) {throw err};
    };  
};

module.exports = User;