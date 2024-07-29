import { useState } from "react";

/* 
    Custom Hook (사용자 정의 Hook)
    - 여러 컴포넌트에서 반복되는 로직을 하나의 함수로 만들어 사용
    - use로 시작하는 함수의 이름을 정의
    - useState, useEffect 등 기본 Hook들을 사용하여 원하는 기능을 구현하고,
      컴포넌트에서 사용하고 싶은 값들을 반환

    => Custom Hook을 사용하면 코드의 중복을 줄이고, 컴포넌트의 재사용성과 유지보수성을 높일 수 있다.
*/

export function useInput(initialValue, submitAction) {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (e) =>{
        setInputValue(e.target.value);
    };

    const handleSubmit = () =>{
        setInputValue('');
        submitAction(inputValue);
    }

    return [inputValue, handleChange, handleSubmit];
}