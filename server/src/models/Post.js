"use strict";

const PostStorage = require('./PostStorage');
const s3 = require('../utils/s3')

class Post {

    constructor(body, file) {
        this.body = body;
        this.file = file;
    }

    // 게시글 추가
    async create() {
        const {userId, title, content} = this.body;
        const image = this.file;

        try {
            const image_path = await s3.imageUploader(image, userId); // 이미지 업로드
            const postInfo = {userId, title, content, image_path};
            await PostStorage.createPost(postInfo);
            return {code: 200};
        } catch(err) {throw err};
    }
}

module.exports =  Post;