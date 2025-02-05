import { useState } from 'react'
import './App.css'
import {Routes , Route ,Link ,useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'

// 1. "/" 모든 일기를 조회
// 2. "/new" 새로운 일기 작성
// 3. "/diary" 일기 조회
// Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈수있음
function App() {
  const nav = useNavigate();
  const onClickButton =() =>{
    nav("/new")
  };
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>new 페이지로</button>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App
