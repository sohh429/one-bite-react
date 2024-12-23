// 5가지 요소 순회 및 탐색 메서드
// 1. forEach문 : 모든 요소 순회 

let arr1 = [1,2,3];
arr1.forEach((item, idx, arr )=>{
    console.log(idx , item * 2);
});

let doubledArr = [];

arr1.forEach((item)=>{
    doubledArr.push(item *2);
})

// 2. includes
// 배열에 특정요소가 있는지 확인하는 메서드

let arr2 = [1,2,3];
let isInclude = arr2.includes(3);

console.log(isInclude); // 불린 타입으로 반환


// 3. indexOf 
// 특정요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.index(2);
console.log(index) // 가장 가까운 위치를 반환 
// 원시타입의 위치만 정확하게 찾아줌 , 객체를 인수로 넘겼을 때는 찾지못함

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정요소의 인덱스(위치)를 반환하는 메서드
// 가장 위치를 반환
let arr4 = [1,2,3];
/* arr4.findIndex((item)=>{
    if(item === 2) return true;
}) */
arr4.findIndex((item)=> (item === 2)); // 객체의 값에도 접근 가능
// 객체의 특정 프로퍼티의 비교 가능


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾음, 요소를 그대로 반환

let arr5 = [
    {name : "이정환"},
    {name : "홍길동"}
]


const finded = arr5.find((item)=> item.name === "이정환")