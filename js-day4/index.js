// 변수 선언시 var를 사용하지 않는다 let, const
// 웹서비스시 비동기적 처리위해서 제공하는 객체
const ajex = new XMLHttpRequest();
// 해커뉴스에서 제공하는 뉴스 정보 수집
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';//I/O통신 -> dead Lock, crash
// open함수는 XMLHttpRequest에서 제공하는 함수
// 1. GET or POST, 2. URL - 데이터셋, 3. false 일반적
ajex.open('GET', NEWS_URL, false);// true:동기적처리, false:비동기처리
ajex.send();
// URL로 해커뉴스 서버에 요청을 했을 때 응답값을 받아올 수 있다.
//console.log(ajax.response);
const newsFeed = JSON.parse(ajex.response);
const ul = document.createElement('ul');
for(let i=0;i<5;i++){
  const li  = document.createElement('li')
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
 // console.log(newsFeed[i].title);
}
//defer가 있으면 비동기적으로 js 처리가 된다.
//그러니까 js가 root보다 먼저 있어도 읽을 수 있다.
//defer가 아니면 root다음에 js를 두라
document.getElementById('root').appendChild(ul);