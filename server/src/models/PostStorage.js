"use strict";

const db = require("../config/db");

class PostStorage {
    // 생성된 게시글을 DB에 저장
    static async createPost(postInfo) {
        try {
            const {
                userId,
                title,
                content,
                image_path
            } =  postInfo;
           
            const query = "INSERT INTO posts(userId, title, content, image) VALUES(?, ?, ?, ?);"
            await db.connection(query,[userId, title, content, image_path]);
        } catch (err) {throw err};
    };
};

module.exports = PostStorage;
