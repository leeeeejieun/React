"use strict"
const db = require("../config/db")

module.exports = {
    // RefreshToken을  DB에 저장
  saveRefreshTokens: async (userId, token) => {
    try {
      const query = 'INSERT INTO tokens (userId, refreshToken) VALUES(?, ?);'
      await db.connection(query, [userId, token]);
      return {message: "refreshToken 생성 완료"};
    }catch(err) {
      console.log(err);
    }
  },
  // 해당 RefreshToken을 갖고 있는 사용자 확인
  checkUser: async(refreshToken) => {
    try {
       const query = 'SELECT userId FROM tokens WHERE refreshToken = ?;'
       const result = await db.connection(query, [refreshToken]);
       return result;
    }catch (err) {
      console.log(err);
    };
  },
  // 로그아웃 시 사용자 아이디에 해당하는 RefreshToken을 DB에서 제거
  deleteRefresh: async (userId) => {
    try {
      const query = 'DELETE FROM tokens WHERE userId = ?;'
      const result = await db.connection(query, [userId]);
      return result;
    }catch(err){
      console.log(err);
    }
  } 
};