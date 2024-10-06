"use strict"
const {PutObjectCommand, GetObjectCommand} = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const multer = require('multer');

const aws_s3 = require('../config/aws_s3');
const bucket =  process.env.BUCKET;

module.exports = {
    // multer를 이용하여 form-data 형식의 이미지 받기
    upload : multer({ storage: multer.memoryStorage() }),  // 메모리에 이미지 파일 임시 저장

    // s3에 사용자 이미지 저장
    imageUploader: async (image, userId) => {
        const fileName =  Buffer.from(image.originalname, 'latin1').toString('utf8'); // 한글 깨짐 방지
        const path = `post_images/${userId}/${fileName}`;
        
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
    getImage: async () => {
        try {
            const command = new GetObjectCommand({
                Bucket: bucket,
                Key: `post_images/admin/그림일기 UI 레퍼런스.png`,
            });
            
            // Signed URL 생성
            const url = await getSignedUrl(aws_s3, command, { expiresIn: 3600 }); // GetObjectCommand 사용
            console.log(url); // 생성된 Signed URL
            return url; // URL 반환

        } catch (err) {
            console.error(err);
        }
    }
};
