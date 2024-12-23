// 1. 배열의 구조 분해 할당
let arr = [1,2,3]

let [one, two,three, four = 4] = arr;

// 객체의 구조 분해 할당
let person = {
    name : "홍길동",
    age : "33",
    hobby : "테니스"
}

let {name , age, hobby } = person;

// 존재 하지 않은 값을 받으면 undefined

// 함수에 여러개의 인수를 전달 할 때 사용

// 객체 구조 분해 할당을 이용해서 함수의 매개 변수를 받는 방법

const func = ({name, age, hobby})=>{
    console.log(name, age, hobby)
}
func(person) // 객체를 넘길 때마다 구조분해 할당