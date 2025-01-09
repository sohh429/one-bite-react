export default function Button({text ,color,children}) {

const onClickButton = () =>{
    console.log(text)
}

/* props 객체로 전달됨 */
  return (
    <button onClick={onClickButton} type="button" style={{color: color}}>{text} - {color.toUpperCase()}
    {children}
    </button>
    // 이벤트 핸들러 
    // 합성이벤트 객체 ; 크로스 브라우징 , 
  )
}

Button.defaultProps = {
    color:"black"
}

/* state : 현재 컴포넌트의 상태를 보관하는 변수 */