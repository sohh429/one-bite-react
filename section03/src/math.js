// math 모듈

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

//common js모듈 모듈이라는 내장 객체에 exports라는 프로퍼티의 값을 객체로 저장

export {add , // key 랑 value 이름이 같다면 value 생략 가능
    sub
}


export default function multiply(a,b){ // 기본 값으로 동작
    return a * b
} 