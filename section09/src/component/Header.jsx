import './Header.css'
import {memo} from "react"
const Header = () =>{
    return (
        <div className="Header">
            <h3>오늘은📝</h3> 
            <h1 className='tit_date'>{new Date().toDateString()}</h1>  
        </div>
    )
}


// memo는 인수로 컴포넌트를 받음, Header의 props가 변경되지 않았을때는 리렌더링 되지않도록 최적화해서 반환

export default memo(Header) ; // 최적화가 이루어진 헤더 컴포넌트를 내보냄

