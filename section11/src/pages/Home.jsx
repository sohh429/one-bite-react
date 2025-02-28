import { useState,useContext } from 'react'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import Header from '../components/Header'
import { DiaryStateContext } from '../App'
import usePageTitle from "../hooks/usePageTitle";

const getMonthlyData = (pivoDate, data) => {
  const beginTime = new Date(
    pivoDate.getFullYear(), // 년도, 월 , 1일, 0시 0분 0초 
    pivoDate.getMonth(), 
    1, 0, 0, 0
  ).getTime(); // time stamp 형식의 숫자값으로 변환 
  
  const endTime = new Date(
    pivoDate.getFullYear(),
    pivoDate.getMonth() + 1, // 다음달로 설정  
    0,23,59,59 // 0으로 설정한다면 그 이전 달의 마지막. 
  ).getTime();

  
  return data.filter((item) => 
   beginTime <= item.createdDate && item.createdDate <= endTime 
  );
}


export default function Home() {
  const data = useContext(DiaryStateContext);
  const [pivoDate , setPivoDate] = useState(new Date());
  usePageTitle("감정일기");
  const monthlyData = getMonthlyData(pivoDate , data);
  // console.log(monthlyData)
  const onIncreaeMonth = ()=>{
    setPivoDate(
      new Date(pivoDate.getFullYear(),pivoDate.getMonth() +1 )
    )
  }
  const onDecreaeMonth = ()=>{
    setPivoDate(
      new Date(pivoDate.getFullYear(),pivoDate.getMonth() -1 )
    )
  }

  return (
    <div>
      <Header title={`${pivoDate.getFullYear()}년 ${pivoDate.getMonth() + 1}월`} leftChild={<Button text={"<"} onClick={onDecreaeMonth}/>} rightChild={<Button text={">"} onClick={onIncreaeMonth}/>} />
      <DiaryList data={monthlyData}/>
    </div>
  )
}
