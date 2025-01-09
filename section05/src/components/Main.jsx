import "./Main.css";

export default function Main() {
    const number = 10
    const user ={
        name :'이정환',
        isLogin : true,
    }
  /* return (
    <>
    {user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}
    </>
  ) */
  if(user.isLogin){
    return (
        <div className="logout" >로그아웃</div>
    )
  }else{
    return (
        <div>로그인</div>
    )
  }
}

// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수있다. 반복문, 조건문 사용 X
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.  boolean, undefined X  객체는 렌더링 불가
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야한다. 
// <></> 빈태그로 묶어줘도 된다.


// style을 직접 설정하는 방법.