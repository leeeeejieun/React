"use strict";

const UserStorage = require("./UserStorage");

// 사용자 정보 처리 담당
class User {

    // controller 구현 후 매개 변수 변경 예정
    constructor(id, password) {
        this.id = id;
        this.password = password;
    }

    async login() {
            try{
                const userInfo = await UserStorage.getUserInfo(this.id);
    
                if(!userInfo){
                    console.log("사용자 정보가 없습니다.");
                }
    
                const {id, password} = userInfo;
                if(this.id === id && this.password === password){
                    console.log("로그인 성공");
                }
    
                else{
                    console.log("비밀번호가 일치하지 않습니다.");
                }
            }catch(err){
                new Error("로그인 중 에러 발생");
         }
     }
}

module.exports = User;