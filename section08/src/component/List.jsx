import { useState } from "react";
import "./List.css"
import TodoItem from "./TodoItem";
const List = ({todos ,onUpdate ,onDelete}) =>{
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
    return (
        <div className="List">
            <h4>Todo List🌷</h4>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" type="text" />
            <div className="wrapper_todos">
                
              {filteredData?.map((todo)=>(
                 <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
              ))} 
            </div>
        </div>
    )
}

export default List ;