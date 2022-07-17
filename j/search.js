const ajax = new XMLHttpRequest();
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDvqdPZWgzvtJvUp22554mEjgFmQ5CuIxw";
ajax.open("GET", MOST_URL, false);
ajax.send();
const videoList = [];
//console.log(ajax.response);
const result = JSON.parse(ajax.response);// { ... items:[{snippet:...}]}
const items = result.items;// Array
console.log(items.length);//25
videoList.push(`<ul class='videos'>`);
for(let i=0;i<items.length;i++){
  videoList.push(`<li class='container'>`);
  videoList.push(`<div class='video'>`);
  videoList.push(`<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
  videoList.push(`<div>`);
  videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
  videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
  videoList.push(`</div>`);
  videoList.push(`</div>`);
}
videoList.push(`</ul>`);
document.querySelector('#root').innerHTML = videoList.join("");