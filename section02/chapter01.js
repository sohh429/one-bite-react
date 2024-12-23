// 참 , 거짓 이 아닌 값도 참, 거짓으로 평가

if(123){   // truthy 한 값 ( 참 같은 값 )
    console.log("123 is true");
}else{
    console.log("123 is false");
}

if(undefined){  // Falsy 한 값 (거짓 같은 값)
    console.log("undefined is true"); 
}else{
    console.log("undefined is false");
}


// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = ""; // 빈 문자열
let f7 = 0n; // big Integer


// 2. Truthy 한 값
// 7가지 Falsy 한 값들을 제외한 나머지 모든 값
let t1 = "hello"; // 비어있지 않은 문자열
let t2 = 123; // 숫자 
let t3 = []; // 빈 배열 
let t4 = {}; // 빈 객체
let t5 = ()=>{};

// 3. 활용 

function printName(person){
    /* if(person == undefined || person === null){
        console.log("person의 값이 없음");
        return
    } */
    if(!person){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name) // 객체의 특정 프로퍼티로 접근할때. ( 예외 상황 대응을 위해 )
}


// let person = {name : '홍길동'};
let person;
printName(person);

let myFunction = function() {
    return false; // 리턴 값이 false 지만 myFunction 은 truthy 로 평가
};

if (myFunction) {
    console.log("함수는 truthy 값입니다.");  
}

// JavaScript에서 함수는 객체로 간주되며, 객체는 항상 truthy 값으로 평가됨

// 이때 함수 객체 자체를 평가하는지 / 함수를 호출하여 반환 값을 평가하는 지에 따라 다름 !

/* if (myFunction()) {
    console.log("함수는 falsy 값입니다.");  
} */

