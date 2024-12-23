// 배열 메서드 
// 1. 요소 조작

// 1. push 
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3];
arr1.push(4,5,6,7); // 1,2,3,4,5,6,7

/**
 * push() 메서드, unshift()메서드는 추가 후 배열의 새로운 "길이"를 반환함
 */

// 2. pop 
// 배열의 맨 뒤에 있는 요소를 제거, 반환
let arr2 = [1,2,3];
const poppedItem = arr2.pop(); // 요소 제거 한 요소를 반환 

// 3. shift 
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1,2,3];
const shiftItem = arr3.shift(); // 요소 제거 한 요소를 반환 


// 4. unshift 
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1,2,3];
const newLength = arr4.unshift(0); // 요소 제거 한 요소를 반환 

// shift, unshift는 동작이 느림

// 5. slice 
let arr5 = [1,2,3,4,5];
arr5.slice(2, 5); // 잘라낸 배열을 반환
//  시작 index , 끝 index +1 (배열에 끝이라면 생략가능)
// 음수일 경우에는 끝에서 몇개인지를 의미 (slice(-3))
// 원본배열은 변경되지 않음


// 6. concat 메서드
// 두개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환

let arr6 = [1,2];
let arr7 = [3,4];
let concatedArr =  arr6.concat(arr7);
console.log(arr7);
