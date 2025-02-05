import './App.css'
import { useState , useRef, useReducer,useCallback, createContext,useMemo} from 'react'
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
/** TODO 관련 상태관리
 * @param {Array} state - 현재 상태를 의미, 여기서는 todo Array , 초기값 mockData
 * @param {Object} action - 상태를 변경할 액션 객체 , dispatch 내에 객체를 어떻게 변경할지
 *  
 * */
function reducer(state, action){
  switch(action.type){
    case "CREATE" : return [action.data,...state] ;// 여기서는 새로 추가할 data = onCreate에 dispatch로 보낸 객체를 추가하였고, 초기값(mockdata)을 펼쳐서 배열로 반환
    case "UPDATE" : return state.map((item)=> item.id == action.targetId ? {...item,isDone:!item.isDone} : item);
    case "DELETE" : return state.filter((item)=> item.id !== action.targetId);
    default: return state;
  }

}

// export const TodoContext = createContext(); // 컨텍스트 함수는 컴포넌트 외부에 선언
// 리렌더링 될때마다 새로운 컨텍스트를 가져오는 것이기 때문에 한번만 생성
/**
 *  context  분리하기, 변경되는 props, 변경되지않는 props
 */

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos , dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) =>{
    dispatch({
      type: "CREATE",
      data : {
        id:idRef.current ++ , 
        isDone:false,
        content : content,
        date : new Date().getTime(),
      }
    });
  },[]);

  const onUpdate = useCallback((targetId)=>{
    dispatch({
      type :"UPDATE",
      targetId :targetId,
    })
  },[])

  const onDelete = useCallback ((targetId)=>{
    dispatch({
      type :"DELETE",
      targetId :targetId,
    });
  },[])

/** 함수 최적화
 * @param {function} 최적화 대상 함수
 * @param {Array} depth
 */ 
  //  useCallback(()=>{
    
  // },[]);
  // 컴포넌트가 마운트 될때만 함수를 생성. 그 이후 리렌더링 되더라도
  // 함수 재생성 하지 않음
  const memoizedDispatch = useMemo(()=>{
    return{
      onUpdate,
      onDelete,
      onCreate
    }
  },[]); // 마운트 이후 재생성 방지
  return (
    <div className='App'>
      <Header></Header>
       {/* TodoContext 는 provider로 공급, value=객체로 전달 */}
       <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
             <Editor></Editor>
             <List></List>
        </TodoDispatchContext.Provider>
       </TodoStateContext.Provider>
    </div>
  )
}

// provider 를 구분하여 적용 : 변경이 필요한 props  변경이 불필요한 props 
export default App


{/* <TodoContext.Provider value={{
        todos,
        onUpdate,
        onDelete,
        onCreate
      }}>
        provider로 데이터를 공급받아서 적용 가능 *

      
  </TodoContext.Provider> */}