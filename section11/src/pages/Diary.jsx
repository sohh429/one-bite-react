import { useParams ,useSearchParams } from "react-router-dom"
export default function Diary() {
  const [param , setParams] = useSearchParams();
 
  const params = useParams();

  return (
    <div>Diary</div>
  )
}
