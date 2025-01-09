import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Button from './components/Button'

/* function Header(){
  return(
    <header>
      <h1>header</h1>
    </header>
  )
} */ // 함수 컴포넌트

/* const Footer = ()=>{
  return (
    <footer>
      <h1>footer</h1>
    </footer>
  )
} */

/* 컴포넌트 생성자의 이름은 첫글자를 대문자로  */

function App() {

  return (
    <>
      <Button text={"메일"} color={"red"}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>

    </>
  )
} // root component

export default App

/* 부모 컴포넌트 : App ,
자식 컴포넌트 :Header  */