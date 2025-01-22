import './App.css'
import { useState , useRef} from 'react'
import Header from './component/Header'
import Editor from './component/Editor'
import List from './component/List'
// mock 데이터는 외부에선언해도 가능

const mockData = [
  { id:0 , 
    isDone:false,
    content : '술먹기',
    date : new Date().getTime(),
  },
  { id:1 , 
    isDone:false,
    content : '노래하기',
    date : new Date().getTime(),
  },
  { id:2 , 
    isDone:false,
    content : '춤추기',
    date : new Date().getTime(),
  }
]


// state는 모든 컴포넌트에 조상에 생성
function App() {
  const [todos , setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) =>{
    const newTodo = {
      id:idRef.current ++ , 
      isDone:false,
      content : content,
      date : new Date().getTime(),
    }
   
    setTodos([newTodo,...todos])
  }

  const onUpdate = (targetId)=>{
    setTodos(todos.map((todo)=>{
      if(todo.id == targetId){
        return {
          ...todo,
          isDone:!todo.isDone
        }
      }
      return todo
    }))
  }

  const onDelete = (targetId)=>{
    setTodos(todos.filter((todo)=>todo.id !== targetId))
  }
  return (
    <div className='App'>

      <Header></Header>
      <Editor onCreate={onCreate}></Editor>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}></List>
    </div>
  )
}

export default App
