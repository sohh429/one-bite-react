import { useState } from "react";

// const state = useState();

// 1. 함수컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 훅은 함수 컴포넌트 내부에서 호출 되어야한다
// 2. 조건부로 호출 될 수없음
// ㄴ 조건문이나 반복문 내부에서 호출 불가능
// 서로 다른 호출의 순서가 엉망으로 내부에서 오류가 발생
// 3. 커스텀훅 만들 수 있음

function useInput(){
    const [input, setInput] = useState("");
    const onChange = (e) =>{
        setInput(e.target.value);
    };

    return [input, onChange];

}


const HookExam = ()=>{
    const [input, onChange] = useInput();
    return <div>
        <input type="text" value={input} onChange={onChange} />
        <p>{input}</p>
    </div>
}

export default HookExam;