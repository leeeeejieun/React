"use strict"
const db = require("../config/db")

module.exports = {
    // 로그인 시 생성된 RefreshToken을 DB에 저장
  saveRefreshTokens: async (userId, token) => {
      const query = 'INSERT INTO tokens (userId, refreshToken) VALUES(?, ?);'
      await db.connection(query, [userId, token]);
  },
  // 해당 RefreshToken을 갖고 있는 사용자 확인 및 반환
  findUser: async(refreshToken) => {
       const query = 'SELECT userId FROM tokens WHERE refreshToken = ?;'
       const result = await db.connection(query, [refreshToken]);
       return result;
  },
  // RefreshToken을 DB에서 제거
  deleteRefresh: async (userId) => {
      const query = 'DELETE FROM tokens WHERE userId = ?;'
      await db.connection(query, [userId]);
  } 
};