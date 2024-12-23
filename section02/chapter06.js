// 1. 배열 순회

let arr = [1,2,3];

for(let i = 0 ; i < arr.length ;i++){
    // console.log(arr[i]);
}

// 1.1 배열 인덱스
let arr2 = [4,5,6,7,8];

for(let i = 0 ; i < arr2.length ;i++){
    console.log(arr2[i]);
}


// 1.2 for of 반복문 // 배열을 순회하기 위한 반복문
for(let item of arr){
    console.log(item); 
}  

// 2. 객체 순회

let person = {
    name: "이정환",
    age : 27,
    hobby :"테니스"
}

// Object.keys사용
let keys = Object.keys(person); // 객체의 key 값만 가져오는 법
console.log(keys);

for(let key of keys){
    console.log(key, person[key])
}



// 2.2 Object.values
let values = Object.values(person);

for(let value of values){
    console.log(value);
}


// 2.3 for in 문(객체)

for(let key in person){ // person 의 key를 가져옴
    console.log(key);
}