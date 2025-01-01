
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true; // 이 값을 바꿔서 성공과 실패를 시뮬레이션할 수 있습니다.
//     if (success) {
//       resolve("작업이 성공적으로 완료되었습니다!"); // 성공 시 resolve
//     } else {
//       reject("작업이 실패했습니다."); // 실패 시 reject
//     }
//   }, 1000); // 1초 후에 작업이 완료됩니다.
// });

// // Promise 처리하기
// myPromise
//   .then((message) => {
//     console.log(message); // 성공 시 메시지 출력
//   })
//   .catch((error) => {
//     console.error(error); // 실패 시 에러 메시지 출력
//   });



//   *then/catch 는 Promise가 반환되었을 때, 그 결과나 오류를 처리하는 기존 방식.
//   * async/await 는 Promise가 해결될 때까지 기다리고, 그 결과를 직접 받는 방식이에요. 이 방법은 코드가 마치 동기적으로 실행되는 것처럼 보이기 때문에 가독성이 좋고 더 직관적임 


// function tesk1(callback) {
//     setTimeout(() => {
//       console.log("작업 1 완료");
//       callback();  // 작업 1이 끝났을 때 호출
//     }, 1000);
//   }
  
//   function tesk2(callback) {
//     setTimeout(() => {
//       console.log("작업 2 완료");
//       callback();  // 작업 2가 끝났을 때 호출
//     }, 1000);
//   }
  
//   function tesk3(callback) {
//     setTimeout(() => {
//       console.log("작업 3 완료");
//       callback();  // 작업 3이 끝났을 때 호출
//     }, 1000);
//   }
  
//   tesk1(() => {
//     tesk2(() => {
//         tesk3(() => {
//         console.log("모든 작업 완료");
//       });
//     });
//   }); // 콜백이 중첩되어있음


  function tesk1(){
    return new Promise((reject, resolve)=>{
        setTimeout(() => {
            console.log("작업 1 완료");
            resolve();
        }, 1000);
    })
  }

  function tesk2(){
    return new Promise((reject, resolve)=>{
        setTimeout(() => {
            console.log("작업 2 완료");
            resolve();
        }, 1000);
    })
  }

  function tesk3(){
    return new Promise((reject, resolve)=>{
        setTimeout(() => {
            console.log("작업 3 완료");
            resolve();
        }, 1000);
    })
  }
  
  tesk1().then(tesk2()).then(tesk3());