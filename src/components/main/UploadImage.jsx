import React, { useState } from "react";
import styled from "styled-components";

export const UploadImage = ({image, handleImageUpload}) => {
    
     //  이미지 URL을 저장할 객체
     const [img, setImg] = useState(image);

    const handleUpload = (e) =>{
        // 선택한 파일을 가져옴
        const file = e.target.files[0];

        // 미리보기 기능 구현
        if(file){
            // FileReader 객체 생성
            const reader = new FileReader();
            // 파일 읽기가 완료되면 결과를 image에 저장
            reader.onloadend = () =>{
                setImg(reader.result);
                handleImageUpload(reader.result);
            };

            // 파일을 데이터 URL로 읽기 시작
            reader.readAsDataURL(file);
        }
    };

    return(
        <> 
            {/* 이미지 미리보기 : image에 저장된 이미지 URL을 사용*/}
            {/* 이미지가 없는 경우 기본 이미지로 대체*/}
            <ImageWrapper>
                <label htmlFor="img">
                    <img src={img ? img : `${process.env.PUBLIC_URL}/img/upload.png`} alt="이미지 오류"/>
                 </label>
                {/* 파일 input 요소 : 기본적으로 숨겨져 있으며 , 이미지 클릭 시 파일 업로드 수행 */}
                <input 
                    style={{display: 'none'}}
                    id ="img"                   // htmlFor 속성과 일치해야 됨 
                    type="file"
                    accept="image/*"            // 파일 형식 지정 : 이미지 파일만 업로드 가능 
                    onChange={handleUpload}     
                />
            </ImageWrapper>
        </>
    );
};

const ImageWrapper = styled.div`
    width: 350px;
    height: 350px;
`;


