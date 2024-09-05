"use strict";

const UserStorage = require("./UserStorage");

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

                if(!userInfo) {return {success : false, msg: "사용자 정보가 없습니다."};}
    
                const {id, password} = userInfo;

                if (client.id === id && client.password === password){
                    return {success : true, msg: "로그인 성공"};
                }
    
                else {
                    return {success : false, msg: "비밀번호가 일치하지 않습니다."};
                }
            }catch(err){
                return { success: false, msg: "로그인 중 에러 발생"};
         };
     };


     async register() {
        try {
            const client = this.body;
            // 사용자 id 중복 체크
            const checkUser = await UserStorage.getUserInfo(client.id);
   
            // id가 존재하는 경우
            if(checkUser) return {success : false, msg: "이미 존재하는 id입니다."};

            // id가 존재하지 않은 경우
            const response = await UserStorage.insertUser(client);
            return response;
            }catch(err) {
                return {success: false, msg: "회원가입 중 에러 발생"};
        }
    };  
};

module.exports = User;