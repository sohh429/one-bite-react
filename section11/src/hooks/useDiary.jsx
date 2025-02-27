import { useContext ,useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id)=>{
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    
    useEffect(()=>{
        const currentDiaryItem = data.find((item)=> String(item.id) === String(id));
        if(!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다");
            nav('/',{replace:true})
        }
        setCurDiaryItem(currentDiaryItem) ;
    },[id])

    return curDiaryItem;

}// use_ 프리픽스 사용시 훅으로 사용 할 수있음

export default useDiary;
