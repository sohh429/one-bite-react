let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 

// 객체 프로퍼티, 객체 속성 , key : value
let person = {
    name :'홍길동',
    age :'34'
};

// 객체 프로퍼티를 다루는 방법
// 특정 프로퍼티에 접근, 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); //  존재하지않는 프로퍼티를 가지고 오려할때 = undefined

// 괄호 표기법

let age =  person["age"]; // 문자열로 사용해야함

let property = "hobby";
let hobby = person[property]

// 새로운 프로퍼티를 추가하는 법
person.job = "fe developer";
person["favorite food"] = "떡볶이";



