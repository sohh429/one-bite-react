import { useState } from "react";

export default function Light() {
  const [count, setCount] = useState(0); // 초기값, 상태변화함수 , state : 배열을 반환
  return (
    <div>

      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1);
      }}>+</button>
    </div>

  )
}