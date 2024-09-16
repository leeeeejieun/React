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
  checkUser: async(refreshToken) => {
    try {
       const query = 'SELECT userId FROM tokens WHERE refreshToken = ?;'
       const result = await db.connection(query, [refreshToken]);
       return result;
    }catch (err) {
      console.log(err);
    };
  }
};