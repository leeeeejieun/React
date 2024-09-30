"use strict"
const {PutObjectCommand} = require('@aws-sdk/client-s3');
const multer = require('multer');

const aws_s3 = require('../config/aws_s3');
const bucket =  process.env.BUCKET;

module.exports = {
    // multer를 이용하여 form-data 형식의 이미지 받기
    upload : multer({ storage: multer.memoryStorage() }),  // 메모리에 이미지 파일 임시 저장

    // s3에 사용자 이미지 저장
    imageUploader: async (image, userId) => {
        const path = `post_images/${userId}/${image.originalname}`;
        
        const command =  new PutObjectCommand({
            Bucket: bucket,
            Key: path,   // 저장 위치 및 파일명 설정
            Body: image.buffer
       });
    
        try{
            await aws_s3.send(command);
            return path;
        }catch(err){
            console.log(err);
        }
    },
};
