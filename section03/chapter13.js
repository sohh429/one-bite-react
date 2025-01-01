// promise 
function add10(num){

    const promise = new Promise((resolve , reject)=>{
        // 비동기 작업 실행하는 함수  executor
        setTimeout(()=>{
           if(typeof num === "number"){
            resolve(num +10);
           }else{
            reject("num이 숫자가 아닙니다")
           }
            // resolve("안녕"); // 결과값을 넣어주어야함.
        },2000);
    });
    
    return promise
}
// console.log(promise); // pending : 대기


// then 메서드 : 그 후에
/** 
 * promise.then((value)=>{
    console.log(value);
    }).catch((error)=>{
        console.log(error);
    }).finally((value)=>{
        console.log(value);
    }); 
 * 
*/


//promise 체이닝

const p = add10(0);
p.then((result)=>{
    console.log(result);
    const newP = add10(result);

   return newP;
}).then((result)=>{
    console.log(result);
})


