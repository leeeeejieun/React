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

const Modal = ({show, onClose}) => {
    if(!show){
        return null;
    }

    return ReactDOM.createPortal(
        <ModalWrapper>
            <ModalContent>
                <h2>Modal Title</h2>
                <p>This is a simple modal.</p>
                <button onClick={onClose}>Close</button>
            </ModalContent>
        </ModalWrapper>,
        document.getElementById('modal-root') // modal-root ID가 있는 DOM 요소를 찾아서 모달을 렌더링한다.
    );
};

export default Modal;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
`;
