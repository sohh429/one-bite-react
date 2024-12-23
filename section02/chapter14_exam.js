

// async 
// 어떤 함수를 비동기 함수로 만들어주는 키워드

document.addEventListener("DOMContentLoaded", ()=> {
    const sendBtn = document.getElementById("btnChat");
    const txtChat = document.getElementById("txtChat").value;
    const listChat = document.getElementById("chatList");

    sendBtn.addEventListener("click", function () {
        console.log(txtChat)
        if(!txtChat){
            addTxt(txtChat);
        }
    });

});

function addTxt(txt){
    chatList.insertAdjacentHTML("beforeend", `<div class='item_right'>${txt}</div>`)
}