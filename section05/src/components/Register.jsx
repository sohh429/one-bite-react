import { useState } from "react"

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

    const onChangeName = (e) =>{
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


  return (
    <div>
          <div>
              <input placeholder={"이름"} onChange={onChangeName} />
              {input.name}
          </div>
          <div>   
            <input type="date" onChange={onChangeBirth}  />
            {input.birth}    
        </div>
        <div>
            <select name="" id="" value={input.country} onChange={onChangeCountry}>
                
                <option value="kr">한국</option>
                <option  value="us">미국</option>
                <option  value="uk">영국</option>

            </select>
            {input.country} 
        </div>
        <div>
            <textarea value={input.bio} onChange={onChangeBio}></textarea>
            {input.bio}
        </div>
    </div>
  )
}