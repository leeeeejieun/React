"use strict";

const db = require("../config/db");

// 사용자 정보 저장 클래스
class UserStorage{
    
    // id 값이 일치한 사용자 정보 반환
    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query =  "SELECT * FROM users WHERE id = ?;"
            db.query(query, [id], (err, data) => {
                if(err) reject(err);

                resolve(data[0]);  
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
                if(err) reject(err);
                
                resolve({code: 201, message: "회원가입에 성공하였습니다."});
             });
        });
    };
};

module.exports = UserStorage;

