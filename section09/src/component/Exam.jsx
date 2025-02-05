import { useReducer } from "react"

function reducer(state, action){
// 상태, dispatch안에 action 객체
switch(action.type){
    case "INCREASE" :  return state + action.data;
    case "DECREASE" :  return state - action.data;
    default : return state 
}
}


//dispatch 상태변화를 발송하는 함수
export default function Exam() {
    // useReducer 함수, 초기값
    const [state , dispatch] = useReducer(reducer,0);
    const onClickPlus =()=>{
        // 인수: 상태가 어떻게 변하는지
        // 액션 객체를 인수로 전달
        dispatch({
            type : "INCREASE",
            data : 1,
        })
    }

    const onClickMinus =()=>{
        // 인수: 상태가 어떻게 변하는지
        // 액션 객체를 인수로 전달
        dispatch({
            type : "DECREASE",
            data : 1,
        })
    }
    return (
    <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
  )
}
