import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />
)

// 개발모드로 진행시 잠재적인 문제가 있는지 내부적으로 검사해줌
