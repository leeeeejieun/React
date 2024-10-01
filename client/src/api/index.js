import axios from "axios";

const SERVER_URL = "http://localhost:4000";   // 서버 주소

export const createPost = async (data) => {
    
    const postData = new FormData();

     // FormData에 데이터 추가
    postData.append('userId', "test");
    postData.append('title', data.title);
    postData.append('content', data.body);
    postData.append('image', data.imgFile); // imgFileName이 File 객체일 경우


    try {
        const response = await axios.post(`${SERVER_URL}/posts`, postData,  {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(response.status);
    }catch(err) {
        alert(err);
    }
    
};

