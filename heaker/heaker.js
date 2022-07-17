function handleEnter(){
  // alert(event.keyCode)
  if(event.keyCode === 13){
    console.log('엔터쳤을때');
    searchList(); 
  }
}

// const ajax = new XMLHttpRequest();
// // 오라클 서버를 경유해서 가져오는 대신에 해커뉴스에서 제공하는 데이터셋을
// // 활용해서 dom(html요소-활용->React수업 선수학습)을 조작해 보자.
// const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';//I/O통신 -> dead Lock, crash
// ajax.open('GET', NEWS_URL, false);// true:동기적처리, false:비동기처리
// ajax.send(); //전송이 일어난다




function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어 :' +query);
  const ajax = new XMLHttpRequest();
const CONTENT_URL = `https://api.hnpwa.com/v0/item/${query}.json`;
ajax.open("GET", CONTENT_URL, false);
ajax.send();
const COMMENTSList = [];
console.log(ajax.response);
const newContent = JSON.parse(ajax.response); // {...items:[{snippet:...}]}


this.alert('뉴스의 제목은 '+newContent.title)
console.log(newContent);


// console.log(news.length); // 25

COMMENTSList.push(`<ul class='news'>`);

for(let i=0;i<20;i++){
  COMMENTSList.push(`<li class='container'>`);
  COMMENTSList.push(`<div class = 'newContent'>`);
  COMMENTSList.push(`<div'>`);
  COMMENTSList.push(`<p class='use'>${newContent.comments[i].user}></p>`);
  COMMENTSList.push(`</div>`);
  COMMENTSList.push(`<div'>`);
  COMMENTSList.push(`<p class='content'>${newContent.comments[i].content}</p>`);
  COMMENTSList.push(`</div>`);
  COMMENTSList.push(`</div>`);
}

COMMENTSList.push(`</ul>`);
// document.getElementById('root') = COMMENTSList.join("");
document.querySelector('#root').innerHTML = COMMENTSList.join("");}

