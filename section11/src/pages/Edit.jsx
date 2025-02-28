import { useParams ,useNavigate} from "react-router-dom"
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext ,useEffect ,useState} from "react";
import {DiaryDispatchContext,DiaryStateContext} from "../App"
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";
const Edit = () =>{
    const params = useParams();
    const nav = useNavigate();
    const {onDelete,onUpdate} = useContext(DiaryDispatchContext);
    usePageTitle(`${params.id}번 일기 수정`);
    const curDiaryItem = useDiary(params.id);
    const onClickDelete = () => {
      if(window.confirm("일기를 정말 삭제할까요?")) {
        onDelete(params.id);
        nav('/',{replace:true}) // 뒤로가기 동작 X 
      }  
      // onDelete(params);
      // 브라우저 내장 기능, 확인, 취소를 발생하는 컨펌창
    };

    const onSubmit = (input) => {
        if(window.confirm("일기를 정말 수정할까요?")){
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content)
        }
        nav("/",{replace:true})
    }
    return (
        <div>
            <Header title={"일기 수정하기"} leftChild={<Button onClick={() => { nav(-1) }} text={"< 뒤로가기"} />} rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />} />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    )
}

export default Edit;

// 컴포넌트가 렌더링 되자마자 호출하고 싶을때는 useEffect를 대신 사용 , 마운트 되었을 때 함수 호출
// navigate함수는 컴포넌트들이 다 마운트 된 이후에 동작 , 브라우저 라우터 컴포넌트가 공급하고있는 기능이기 때문
// 