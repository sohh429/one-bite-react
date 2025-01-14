
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/controller'
import { useState ,useEffect ,useRef} from 'react'
import Even from './components/Even'

function App() {
  const isMount = useRef(false);
  const [count, setCount] = useState(0);
  useEffect(()=>{
   // console.log(`count: ${count}`)
  },[count]) 
  // callbalck, array 
  // 두번째 배열 인수가 변경될때마다 함수 실행
 // 의존성 배열 deps, 값이 여러개 사용해도 됨
 // 

 // 1. 마운트
 useEffect(()=>{console.log("mount")},[])
 // 2. 업데이트,
 useEffect(()=>{
    if(!isMount.current){
      isMount.current =true;
      return
    }
    console.log("update")
 })
 // 3. 언마운트 
  const onClickButton = (value)=>{
    setCount(count + value) // setCount는 비동기로 동작 , 호출만 된것이며 완료된 것이 아님
    // console.log(count)
  }
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section> <Viewer count={count}></Viewer>
        {count % 2 === 0 ? <Even/> :null}
      </section>
      <section><Controller onClickButton={onClickButton} ></Controller></section>
    </div>
  )
}

export default App
