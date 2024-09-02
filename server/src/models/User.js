"use strict";

const UserStorage = require("./UserStorage");

// 사용자 정보 처리 담당
class User {

    constructor(body){  
        this.body = body;
    }

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
                new Error("로그인 중 에러 발생");
         };
     };
};

module.exports = User;