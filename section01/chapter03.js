
/* 다음은 콜백 함수를 사용한 다양한 예제 문제 5가지입니다:

1. 숫자 배열 필터링
사용자가 제공한 배열에서 특정 조건에 맞는 숫자만 필터링하는 함수를 작성하세요. 조건은 콜백 함수로 전달됩니다.
// filterNumbers 함수와 콜백을 구현하세요. */
function filterNumbers(numbers, callback) {
    // 여기에 코드를 작성하세요.
}

// 예제:
// 숫자 배열에서 짝수만 필터링하는 콜백 함수
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (number) => number % 2 === 0;

console.log(filterNumbers(numbers, isEven)); // 출력: [2, 4, 6]
