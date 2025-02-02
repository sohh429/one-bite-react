# 리액트

## 개발환경설정
 
- nodejs v18이상
  
- npm create vite@latest ./ 현재폴더에 템플릿 세팅
  
- Select a framework: React, Select a variant: JavaScript
  
- npm i - package.json의 의존성 패키지 설치

- devDependencies 는 개발할 때만 사용 되는 라이브러리(lint, test)
  
- public : 이미지 파일, 정적 파일 , 폰트 등 정적자산 
  
- 이미지는 /src/assets/images에 넣으면 빌드시 파일명 해시처리(캐싱방지), 용량최적화 진행
  
- components 하단 > General > Highlight updates when components render 체크
  
  (렌더링되는 컴포넌트 하이라이트로 보기)
  
- vscode익스텐션: ES7+ React/Redux/React-Native/JS snippets 설치
  
- ctrl + alt + R 리액트 스니펫 명령어 보기: rfc(리액트함수컴포넌트)
  
- vite번들러에서 별칭 절대경로 설정
  

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
    ],
  },
});
```

- 자바스크립트 설정에서 vscode 별칭 절대경로 설정
  
- F1 > open setting UI > import module검색 > JavaScript: Import Module Specifier - non-relative, TypeScript: Import Module Specifier - non-relative
  

```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- 타입스크립트(자바스크립트인 경우 생략)

```json
// tsconfig.json
{
  "compilerOptions": {
    ...{options},
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src", "**/*.ts", "**/*.tsx"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- eslint prop type 에러 뜰 경우 `'react/prop-types': 'off'` 추가

```bash
rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
  },
```

---

## 리액트 기본구조

- body 하단에서 main.jsx 모듈 연결하여 시작, jsx는 리액트 컴포넌트 확장자

```html
// index.html
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
```

```js
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
// 상대경로로 App 컴포넌트 가져오기
import App from './App.jsx'
import './index.css'

// 엄격모드이므로 개발모드에서만 두번 렌더링하여 useEffect 스트레스 테스트
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## App.jsx

- root컴포넌트이며 메인페이지 역할
  
- 컴포넌트 파일명은 파스칼 케이스(첫단어 대문자)
  

```js
// App.jsx
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export default function App() {
  return <h1>Hello World</h1>;
}
```



