import "./Button.css"
const Button = ({text,type,onClick})=>{
    return(
        <button onClick={onClick}  className={`Button ${type ? `Button_${type}` : ''}`}>
            {text}
        </button>
    )
}
export default Button;