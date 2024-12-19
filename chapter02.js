// 단락평가

let varA = false;
let varB = true;

// And 연산자
console.log(varA && varB ); 

// or 연산자
console.log(varB || varA ); 

// 첫번째 피연산자 값이 true일 때 true 반환

function returnFalse(){
   return false;
}

function returnTrue(){
   return true;
}

console.log(returnFalse() && returnTrue())

// 단락평가 : 첫번째 피연산자 값으로만 결과를 확정할 수 있다면 두번째 피연산자는 실행하지않음

 
console.log(returnTrue() || returnFalse());

// 첫번째 피연산자가 true이기 때문에 두번째는 실행 x
// boolean 및 truthy, falsy한 값도 판단 가능


// 단락평가 활용
 function printName(person){
  const name = person && person.name
  console.log(name || "person 값이 없음");
 }
 
printName({name:'홍길동'})

