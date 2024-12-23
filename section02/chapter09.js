// 배열 변형 메서드

// 1. filter 
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

arr1.filter((item)=>{
    if(item.hobby === "테니스") return true;
})  

// 2. map
// 배열의 모든 요소를 순회시 각각 콜백함수 실행, 결과값을 새로운 배열로 반환

let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr)=>{
    return item * 2 
})

// 3. sort 
// 배열을 사전 순으로 정렬하는 메서드
arr3.sort(); // 숫자는 대 , 소 관계로 비교하지않음

arr3.sort((a,b)=>{
    if(a>b){
        // b가 a 앞에
        return  1;
    }else if(a<b){
        // a가 b 앞에
        return -1;
    }else{
        return 0;
    }
});

// 4. toSorted 
// 원본배열은 두고 새로운 배열을 반환하는 메서드
const sorted = arr5.toSorted();


// 5. join 
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환