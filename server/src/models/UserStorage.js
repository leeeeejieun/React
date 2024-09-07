"use strict";

const db = require("../config/db");

// 사용자 정보 저장 클래스
class UserStorage{
    
    // id 값이 일치한 사용자 정보 반환
    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query =  "SELECT * FROM users WHERE id = ?;"
            db.query(query, [id], (err, data) => {
                if(err) reject("로그인 중 DB 쿼리 오류");

                resolve(data[0]);  // 일치하는 id가 없으면 undefined 반환
            })
        });
    };

    // 사용자 추가
    static async insertUser (userInfo) {
        const {id, email, password} = userInfo;

        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, email, password) VALUES(?, ?, ?);"
            db.query(query, [id, email, password], 
            (err) => {
                if(err) reject("회원가입 중 DB 쿼리 오류");
                
                resolve({success : "회원가입 성공"});
             });
        });
    };
};

module.exports = UserStorage;

