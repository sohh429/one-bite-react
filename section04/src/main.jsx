import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // 컴포넌트를 가져옴

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// index.html에 있는 id root를 가진 요소를 인수로 전달
// 루트 아래에 렌더링 설정 ,(App)
