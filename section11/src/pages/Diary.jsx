import { useParams ,useSearchParams } from "react-router-dom"
export default function Diary() {
  const [param , setParams] = useSearchParams();
  console.log(param.get("value"))
  const params = useParams();
  console.log(params)
  return (
    <div>Diary</div>
  )
}
