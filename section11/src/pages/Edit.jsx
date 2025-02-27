import { useParams ,useSearchParams } from "react-router-dom"
const Edit = () =>{
    const params = useParams();
    return (
        <div>{params.id}</div>
    )
}

export default Edit;