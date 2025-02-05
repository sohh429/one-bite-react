import { TodoDispatchContext } from '../App';
import './TodoItem.css'
import { memo ,useContext} from 'react';
const TodoItem = ({id, isDone, content,date})=>{
    const {onUpdate ,onDelete} = useContext(TodoDispatchContext);

    const onChangeCheckbox = ()=>{
        onUpdate(id);
    }
    const onChangeDelete = ()=>{
        onDelete(id);
    }
    return (
        <div className={`TodoItem ${isDone ? 'is_done' :''}`}>
            <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onChangeDelete}>삭제</button>
        </div>
    )
}

// 고차 컴포넌트 HOC
// export default memo(TodoItem, (prevProps , nextProps)=>{
//     // 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
//     // true면 props가 바뀌지않음 : 리렌더링 X
//     // false면 props가 바뀜 : 리렌더링 O
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;
//     return true; 
// });
// 객체타입의 함수는 렌더링 될때마다 참조값이 다른것이라고 가정. 따라서 props가 변경 된다고 봄
// memo는 컴포넌트가 받는 props가 변경되지 않으면 리렌더링을 방지하는 기능입니다. 즉, props가 같다면 컴포넌트는 리렌더링되지 않음

export default memo(TodoItem)