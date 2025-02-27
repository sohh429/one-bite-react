import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";

const EmotionList = [
    {
        emotionId : 1,
        emotionName : "좋음"
    },
    {
        emotionId : 2,
        emotionName : "좋음"
    },
    {
        emotionId : 3,
        emotionName : "좋음"
    },
]
const Editor = ()=>{
    const emotionId = 1;

    return(
        <div className="Editor">
        <section className="date_section">
          <h4>오늘의 날짜</h4>
          <input 
          type="date"
        />
        </section>
        <section className="emotion_section">
          <h4>오늘의 감정</h4>
          <div className="emotion_list_wrapper">
            {EmotionList.map((item)=><EmotionItem key={item.emotionId} {...item} isSelected={item.emotionId == emotionId}/>)}
            
          </div>
        </section>
        <section className="content_section">
          <h4>오늘의 일기</h4>
          <textarea
          name="content"
          placeholder="오늘은 어땠나요?"
        />
        </section>
        <section className="button_section">
            <Button text={"취소하기"} />
            <Button
            
            text={"작성완료"}
            type={"POSITIVE"}
            />
        </section>
      </div>
    )
}

export default Editor;