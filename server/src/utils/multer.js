"use strict"
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const days = new Date().toLocaleDateString().replace(/\./g, "").replace(/ /g, ""); // 20230615 형식의 현재 시간 나타내기

const storage = multer.diskStorage({
    // 이미지 파일이 저장될 위치 설정
    destination: (req, file, cb) => { 
        const {userId} = req.body;
        const userDir = path.join('./src', 'images', 'post_images', userId);  // 사용자 디렉터리 생성
        
        try {
            fs.readdirSync(userDir);   // 디렉터리 확인(해당 경로에 있는 파일을 읽어옴)
        }catch (err) {
            fs.mkdirSync(userDir);   // 디렉터리 생성
        };
        cb(null, `${userDir}/`);     // 해당 경로에 이미지 파일 저장
    },
    // 이미지 파일명 설정
    filename: (req, file, cb) => {
        cb(null, `${days}_${file.originalname}`);  // 사용자가 업로드한 파일명으로 생성
    }
});

const upload = multer({storage: storage});

module.exports = upload;