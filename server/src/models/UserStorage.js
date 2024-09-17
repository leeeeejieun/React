"use strict";

const db = require("../config/db");

// 사용자 정보 저장 클래스
class UserStorage{
    
    // id 값이 일치한 사용자 정보를 반환
    static async getUserInfo(id){
        const query =  "SELECT * FROM users WHERE id = ?;"
        const result = await db.connection(query, [id]);
        return result;
    };
   
    // 새로운 사용자 정보를 DB에 저장
    static async insertUser (userInfo) {
        const {id, email, password} = userInfo;
            const query = "INSERT INTO users(id, email, password) VALUES(?, ?, ?);"
            db.connection(query, [id, email, password]);
    };
};

module.exports = UserStorage;

