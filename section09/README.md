## usereducer
-----
<br>   

* 컴포넌트 내부에 새로운 state를 생성하는 리액트 hook

* 모든 useState는 useReducer로 대체 가능

* 상태 관리 코드를 컴포넌트 외부로 분리 가능

* useState를 사용했을 때 상태 관리를 컴포넌트 내부에서만 가능하나
useReducer를 사용하면 컴포넌트 외부에 상태 관리 코드를 분리할수있음



<br><br>

### useMemo 
-----
* 불필요한 연산을 최적화 하는 리액트 훅
* 반복적으로 수행하는 동일한 연산을 기억
* 최초로 작업한 내용을 메모리에 저장
<br>

### React.memo 
* 컴포넌트를 인수로 받아 최적화된 컴포넌트로 만들어 반환

``` javascript
    const MemoizedComponent = memo(Component)
```

+ 반환값 : 최적화 된 컴포넌트
+ Props를 기준으로 메모이제이션 됨
메모 컴포넌트는 부모가 리렌더링 되더라도 자신이 만든 props가 변경되지 않으면 리렌더링 X

### 컴포넌트를 내보내는 방식

1. 변수로 내보내는 방법

``` javascript 
    const Exam = () => {
        return (
            <div>
                <h1>최적화된 컴포넌트 🎯</h1>
            </div>
        );
    };
    export default React.memo(Exam);  // memo로 감싸서 최적화
```

2. 함수로 내보내는법 

``` javascript 
    export default React.memo(function Exam() {
        return (
            <div>
                <h1>최적화된 컴포넌트 🎯</h1>
            </div>
        );
    });
```


### memo 사용시 유의점

* 객체타입의 함수는 렌더링 될때마다 참조값이 다른것이라고 가정. 따라서 props가 변경 된다고 봄
* 따라서 memo를 사용해도 렌더링될때마다 재선언, 변경
* memo 함수의 콜백함수로 최적화 기능을 커스터마이징
* 함수는 컴포넌트 내부에서 이벤트 핸들러로 사용되기 때문에 다시 props로 전달할 필요가 없음
* React.memo는 기본적으로 얕은 비교(shallow comparison)를 사용하여 이전 props와 새로운 props를 비교
* 그 후 props가 변경되지 않으면 컴포넌트 리렌더링을 막음
* 여기서 얕은비교란 ? 원시값(문자열, 숫자, 불리언) 등을 비교함
* 객체나 배열, 함수와 같은 참조형 값이 변경되었는지를 참조값을 통해 판단

### useCallback

1. 기능을 먼저 구현
2. 최적화 작업
3. 최적화 대상 ? 
   - 단순 컴포넌트는 X
   - 함수를 많이 가진 컴포넌트
   - props를 많이 받는 컴포넌트 

### React context
컴포넌트 간에 데이터를 전달하는 방법
기존의 props가 가지고 있던 단점을 해결
<br>
props는 부모 -> 자식으로만 데이터를 전달
props driling 해결

