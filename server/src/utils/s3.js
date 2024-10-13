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
    imageUploader: async (baseFolder, image, userId) => {
        const date = new Date().toISOString().split('T')[0]; // 오늘 날짜를 'YYYY-MM-DD' 형식으로 가져오기
        const fileName = Buffer.from(image.originalname, 'utf8').toString('utf8'); // 한글 깨짐 방지
        const path = `${baseFolder}/${userId}/${fileName}_${date}`; // 날짜와 파일명을 포함한 경로
        console.log(path)
        
        const command =  new PutObjectCommand({
            Bucket: bucket,
            Key: path,   // 저장 위치 및 파일명 설정
            Body: image.buffer
       });
    
        await aws_s3.send(command);
        return path;
    },
    getImage: async () => {
        try {
            const command = new GetObjectCommand({
                Bucket: bucket,
                Key: "diary_images/test/다운로드.png_2024-10-13",
            });
            
            // Signed URL 생성
            const url = await getSignedUrl(aws_s3, command, { expiresIn: 3600 }); // GetObjectCommand 사용
            return url; // URL 반환

        } catch (err) {
            console.error(err);
        }
    }
};


