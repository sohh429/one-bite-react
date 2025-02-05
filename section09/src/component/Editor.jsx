import { useState,useRef ,useContext} from "react";
import "./Editor.css"
import { TodoDispatchContext } from "../App";
const Editor = () =>{
    const {onCreate} = useContext(TodoDispatchContext);
    const [content,setContent] = useState("");
    const contentRef = useRef()
    const onchangeContent = (e)=>{
        //console.log(e.target.value)
        setContent(e.target.value)
        //console.log(contentRef.current.value)
    }
    const onSubmit = ()=>{
        if(content == ""){
            contentRef.current.focus();
            return ;
        }
        
        onCreate(content);
        setContent("");
    }
    const onKeyDown = (e)=>{
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    return (
        <div className="Editor">
            <input onKeyDown={onKeyDown} ref={contentRef} value={content} onChange={onchangeContent} type="text" placeholder="새로운 Todo ...." />
            <button onClick={onSubmit} type="button">추가</button>
        </div>
    )
}

export default Editor ;