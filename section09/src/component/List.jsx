import { useState,useMemo ,useContext} from "react";
import "./List.css"
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () =>{
    const todos = useContext(TodoStateContext); 
    const [search ,setSearch] = useState("");
    const onChangeSearch = (e) =>{
        // console.log(e.target.value)
        setSearch(e.target.value);
    }
    const getFilteredData = ()=>{
        if(search === ""){
            return todos;
        }
        return todos.filter((todo)=>(todo.content.toLowerCase().includes(search.toLowerCase()) ))
    }
    const filteredData =  getFilteredData();


    const {totalCount , doneCount ,notDoneCount} = useMemo(()=>{
            console.log("호출")
            const totalCount = todos.length;
            const doneCount = todos.filter((todo)=>todo.isDone).length;
            const notDoneCount = totalCount - doneCount;
    
            return {
                totalCount,
                doneCount,
                notDoneCount
            }
    },[todos]) // 의존성 배열 (useEffect에서도 사용)
    // 연산이 한번만 실행됨
    // const {totalCount , doneCount ,notDoneCount} = getAnalyzedData();
    // useMemo는 첫번째 콜백함수가 반환하는 값을 그대로 반환해줌
    // 의존성배열이 변경되었을 때만 콜백함수를 실행


    return (
        <div className="List">
            <h4>Todo List🌷</h4>
            <div>
                total : {totalCount}
            </div>
            <div>
                done : {doneCount}
            </div>
            <div>
                notDone : {notDoneCount}
            </div>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" type="text" />
            <div className="wrapper_todos">
                
              {filteredData?.map((todo)=>(
                 <TodoItem key={todo.id} {...todo} />
              ))} 
            </div>
        </div>
    )
}

export default List ;