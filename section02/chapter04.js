// 1. spread 연산자
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3);

let obj = {
    a: 1,
    b : 2
}

let obj2 = {
    ...obj,
    c:3,
    b:4,
}

function funcA (arr){
    console.log(arr);
}

funcA(...arr1)


// 2. Rest 매개변수 / 매개변수
function funcB (...rest){
    console.log(rest);
}

funcB(...arr1)


/**
 * ! rest 매개변수와 spread 연산자의 차이점 !
 * 
 * rest 매개변수와 spread 연산자 모두 ... 문법을 사용하지만 사용목적과 동작방식이 다름
 * 1. rest 매개변수 : 함수의 인수를 하나의 배열로 묶어주는 역할
 * 함수 호출 시 전달된 가변적인 인수들을 처리할때 사용
 * 함수의 매개변수 선언부에서 사용 
 * 
 * "여러 값" → "하나의 배열"
 * 
 * 2. spread 연산자 : 배열이나 객체를 개별 요소로 확장.
 * 배열이나 객체의 요소를 펼치거나 복사할 때 사용.
 * 함수 호출, 배열 리터럴, 객체 리터럴 등에서 사용.
 * 
 * "배열/객체" → "개별 값"
 * 
 */

