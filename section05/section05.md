- 로컬폰트는 /public/fonts에 넣으면 빌드시 후처리없이 복사됨(정적자산은 /public 사용)
  
- 이미지는 /src/assets/images에 넣으면 빌드시 파일명 해시처리(캐싱방지), 용량최적화 진행

### useRef
- useRef : reference 객체를 생성
컴포넌트 내부의 변수로 활용 가능
어떤 경우에도 리렌더링을 유발하지 않음
- 특정 dom 요소에 접근하여 조작 가능(useRef.current)

- useState 값이 변경되면 리렌더링
- 자바스크립트 변수의 경우는 리렌더링 => 새로 변수를 생성, 값을 가지고 가지 못함
 * 컴포넌트 내부에 변수가 필요하다면 hook 으로 사용해야함
 * 컴포넌트 외부에서 선언? => 증가는 하지만 , 컴포넌트를 여러번 사용시 하나의 변수를 공유 하게 됨


### React Hooks 
- 클래스 컴포넌트의 기능을 함수에서도 이용할 수있도록 함
- 클래스 컴포넌트 ? 문법이 복잡함... 
- function 컴포넌트 
- HOOK 
- useState, useRef, useEffect, use
- 조건문이나 반복문에서는 호출 불가함
- 커스텀 hook도 제작 가능


### Life cycle

### useEffect 
- 어떤 동작에 따라 파생되는 side 이펙트를 조정
- 