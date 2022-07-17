function handleEnter(){
  alert(event.keyCode)
  if(event.keyCode === 13){
    console.log('엔터쳤을때');
    searchList(); 
  }
}

function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어 :' +query);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyCIS_v1-BdrTwGF2BQrGgPoiDd2u1A6XZw&type=video`, requestOptions)
  .then(response => response.json())
  // .then(items => console.log(items.item))
  .then(result => {
    const items = result.items;
    const videoList = [];
    videoList.push(`<ul class='videos'>`);
    for(let i=0;i<items.length;i++){
      videoList.push(`<li class='container'>`);
      videoList.push(`<div class ='video'>`);
      videoList.push(`<img class='thumbnail' src = '${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
      videoList.push(`<div>`);
      videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
      videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
      videoList.push(`</div>`); 
      videoList.push(`</div>`);
    }
    
    videoList.push(`</ul>`);
    document.querySelector('#root').innerHTML = videoList.join("");

  })
   console.log(result[i].title)
  .catch(error => console.log('error', error));
  
// console.log(ajax.response);
// const result = JSON.parse(ajax.response); // {...items:[{snippet:...}]}
// const items = result.items; // Array
// console.log(items.length); // 25


// document.querySelector('#root').innerHTML = '111';

}