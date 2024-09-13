"use strict";

const UserStorage = require("./UserStorage");
const generateToken = require("../utils/jwt");

// 사용자 정보 처리 담당
class User {

    constructor(body){  
        this.body = body;
    }

    // 로그인
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
                    const accessToken = generateToken({ id: id });
                    return {code: 200, message: "로그인에 성공하였습니다.", accessToken};
                }
    
                else {
                    return {code: 401, message: "비밀번호가 일치하지 않습니다."};
                }
            }catch(err){
                console.log(err);
                return { code: 400, message: "로그인에 실패하였습니다."};
         };
     };


     async register() {
        try {
            const client = this.body;
            // id 중복 체크
            const checkUser = await UserStorage.getUserInfo(client.id);
            if(checkUser) {
                 return {code: 409, message: "이미 존재하는 아이디입니다."};
            }

            // DB에 사용자 추가 요청 
            const response = await UserStorage.insertUser(client);
            return response;
            }catch(err) {
                return {code: 400, msg: "회원가입에 실패하였습니다."};
        }
    };  
};

module.exports = User;