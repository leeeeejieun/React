"use strict";

const db = require("../config/db");

// 사용자 정보 저장 클래스
class UserStorage{
    
    // id 값이 일치한 사용자 정보 반환
    static async getUserInfo(id){
       try {
        const query =  "SELECT * FROM users WHERE id = ?;"
        const result = await db.connection(query, [id]);
        return result
       } catch(err) {
          console.log(err);
       };
    };
   
    // 사용자 추가
    static async insertUser (userInfo) {
        const {id, email, password} = userInfo;
        try {
             const query = "INSERT INTO users(id, email, password) VALUES(?, ?, ?);"
             db.connection(query, [id, email, password]);
             return {code: 201, message: "회원가입에 성공하였습니다."};
        }catch (err) {
             console.log(err);
        }
    };
};

module.exports = UserStorage;

