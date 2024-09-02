"use strict";

const db = require("../config/db");

// 사용자 정보 저장 클래스
class UserStorage{
    
    // id 값이 일치한 사용자 정보 반환
    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query =  "SELECT * FROM users WHERE id = ?;"
            db.query(query, [id], (err, data) => {
                if(err) reject("해당 사용자가 존재하지 않음");

                resolve(data[0]);
            })
        });
    };
};

module.exports = UserStorage;