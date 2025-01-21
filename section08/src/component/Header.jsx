import './Header.css'
const Header = () =>{
    return (
        <div className="Header">
            <h3>오늘은📝</h3> 
            <h1 className='tit_date'>{new Date().toDateString()}</h1>  
        </div>
    )
}

export default Header ;