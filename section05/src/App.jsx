import './App.css'

import Register from './components/Register';


function App() {

  return (
    <>
      <Register></Register>
    </>
  )
} 

export default App

// 가변적인 값이 리렌더링이 되기 위해서 state사용 
// 자신이 제공받는 Props, 부모컴포넌트가 리렌더링 시 자식컴포넌트도 리렌더링