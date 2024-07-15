import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom"

/* 
    React Portal은 부모 컴포넌트의 DOM 계층 구조 외부에 자식을 렌더링 하는 것을 가능하게 한다.
    이를 통해 모달, 툴팁, 알림과 같은 UI 요소를 루트 DOM 노드 외부에 렌더링 할 수 있다.

    루트 DOM 노드 외부에 렌더링을 하는 이유는 리액트 컴포넌트 트리 내에서 렌더링 되는 UI 요소들은
    부모 컴포넌트의 스타일과 위치에 영향을 받기 때문이다.
    특히 모달과 같은 요소를 구현할 때 React Portal은 중첩된 컴포넌트 구조에서 발생할 수 있는
    스타일 충돌 문제를 해결해 준다.

    모달이란, 다이얼로그 실행 시 포커스와 제어권을 독점하여 다이얼로그를 종료하기 전까지 기존의 화면을 제어할 수 없는 기능을 뜻한다.
    따라서 모달은 항상 화면의 최상위에 위치해야 하며, 모달이 열려있을 때는 기존 화면의 제어가 불가능해야 한다.

    ! createPortal 메서드 구조
    ReactDom.createPortal(child, container)

    1. child : 렌더링할 수 있는 React의 자식 컴포넌트 또는 엘리먼트
    2. container : child가 마운트될 DOM 요소 (일반적으로 HTML 문서 내에서 특정한 위치에 정의된 DOM 요소)
*/

const Modal = ({modal, closeModal, onDelete}) => {
    
    // 모달창 외부 화면 스크롤 방지 구현
    if(!modal){
        document.body.style.overflow = 'auto';       // 모달창을 띄우지 않았을 땐 스크롤 정상 작동
        return null;
    }
    
    else {
        document.body.style.overflow = 'hidden';    // 모달창을 띄울 시 스크롤 불가능(화면 고정)
    }

    // 삭제 버튼 클릭 시 해당 페이지의 topic 제거 후 모달창이 닫아짐
    const deleteHandle = () => {
        onDelete();
        closeModal();
    }

    return ReactDOM.createPortal(
        <ModalWrapper className="flex-center">
            <ModalContent>
                <Title>해당 게시글을 삭제하시겠습니까?</Title>
                <Content>사진과 글이 모두 삭제됩니다.</Content>
                <ButtonWrapper className="flex-end">
                    <Button 
                        style={{color: "rgb(182,119,255)"}}
                        onClick={closeModal}
                    >취소</Button>
                    <Button 
                        style={{color: "rgb(255, 0, 30)"}}
                        onClick={deleteHandle}
                    >삭제</Button>
                </ButtonWrapper>
            </ModalContent>
        </ModalWrapper>
        ,document.getElementById('modal-root')
    )
};

export default Modal;


const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0,0.3);
`;

const ModalContent = styled.div`
    width: 350px;
    height: 170px;
    padding: 20px;
    background-color: white;
    box-shadow: 5px 5px 15px rgb(0,0,0,0.4);
`;

const Title = styled.h3`
    color: black;
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 25px;
`;

const Content = styled.p`
    color: rgba(151, 148, 148, 0.894);
    font-size: 15px;
`;

const ButtonWrapper = styled.div`
    position: relative;
    bottom: -40%;
`;
const Button = styled.button`
    width: 100px;
    background-color: white;
    font-size: 15px;
`