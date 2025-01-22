import { useState,useRef } from "react"
export default function Register() {
    /* const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState(""); */
    const [input,setInput] = useState({
        name :"",
        birth : "",
        country :"",
        bio:"",
    })

    const countRef = useRef(0);
    const inputRef = useRef();
   // console.log(countRef.current) // 값이 변경되었다고 해서 리렌더링 되지않음 , 이벤트 핸들러만 동작
    // 컴포넌트 내부에서 영향을 미치지 않는 요소에만 사용
    
    const onChange = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    /**
     *   const onChangeName = (e) =>{
        setInput({
            ...input,
            name : e.target.value,
        })
    }

    const onChangeBirth = (e) =>{
        setInput({
            ...input,
            birth : e.target.value,
        })
    }
    const onChangeCountry = (e) =>{
        setInput({
            ...input,
            country : e.target.value,
        })
    }
    const onChangeBio = (e) =>{
        setInput({
            ...input,
            bio : e.target.value,
        })
    }

     * 
     */

    const onSubmit = (e)=>{
        if(input.name === ""){
            // 이름을 입력하는 DOM 요소 포커스 
            inputRef.current.focus();
        }
    }
  
    /** 자바스크립트 변수의 경우는 리렌더링 => 새로 변수를 생성, 값을 가지고 가지 못함
     * 컴포넌트 내부에 변수가 필요하다면 hook 으로 사용해야함
     * 컴포넌트 외부에서 선언? => 증가는 하지만 , 컴포넌트를 여러번 사용시 하나의 변수를 공유 하게 됨
     */

  return (
    <div>
          <div>
              <input ref={inputRef} placeholder={"이름"} name="name" onChange={onChange} />
              {input.name}
          </div>
          <div>   
            <input type="date" name="birth" onChange={onChange}  />
            {input.birth}    
        </div>
        <div>
            <select id="" name="country"  value={input.country} onChange={onChange}>
                
                <option value="kr">한국</option>
                <option  value="us">미국</option>
                <option  value="uk">영국</option>

            </select>
            {input.country} 
        </div>
        <div>
            <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
            {input.bio}
        </div>
        <button onClick={onSubmit}>제출</button>
    </div>
  )
}