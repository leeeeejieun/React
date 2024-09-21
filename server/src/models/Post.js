"use strict";

const fs = require('fs');

const PostStorage = require("./PostStorage");
const user = require('../utils/user');

class Post {

    constructor(body) {
        this.body = body;
    }

    async create() {
        const {
            userId,
            title,
            content
        } = this.body;

        // 해당 유저의 게시글 디렉터리 내 이미지 불러오기
        const image = fs.readdirSync(`./src/images/post_images/${userId}`);
        const postInfo = {userId, title, content, image}
        try {
            await PostStorage.createPost(postInfo);
            return {code: 200};
        } catch(err) {throw err};
    }
}

module.exports =  Post;