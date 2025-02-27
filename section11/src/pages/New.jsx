import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

export default function New() {
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button  text={"< 뒤로 가기"} />
        }
      />
      <Editor />
    </div>
  );
}




