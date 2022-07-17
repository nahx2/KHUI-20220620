const content = document.createElement('div')
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

/*
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
*/
fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json())
  .then(result => {
    const ul = document.createElement("ul");
    for(let i=0;i<10;i++){
        const div = document.createElement("div");
        div.innerHTML=`
        <li>
        <a href='#${result[i].id}'>
        ${result[i].title}(${result[i].comments_count});
        </a>
        </li>
        `;
        // const a = document.createElement("a")
        // a.href = result[i].title;
        // li.appendChild(a);
        ul.appendChild(div.firstElementChild);
        // li.innerHTML = result[i].title;
        // ul.appendChild(li);
        
        document.getElementById("root").appendChild(ul);
      }
      document.getElementById("root").appendChild(ul);
      document.getElementById("root").appendChild(contenet);
    })
  
  .catch(error => console.log('error', error));

  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  window. addEventListener("hashchange",()=>{
    // console.log(lacation.hash);
    const id = this.location.hash.substring(1); // #31914288에서 첫번째 자리 #은 잘라내고 시작한다
    fetch("https://api.hnpwa.com/v0/item/@id.json".replace("@id",id), requestOptions2)
      .then(response => response.text())
      //콜백됨
      // .then(result => console.log(result))
      .then(result => {
        const title = this.document.createElement("h1");
        title.innerHTML = result.title;
        content.appendChild(title);
      })
      .catch(error => console.log('error', error))
  })


/*
  글목록의 링크는 샵이엇음 그러면 로케이션.해시에 샵이 들어왔음
  그러면 이것으로 어떤 참 거짓을 나눈ㄹ 수 있지? 영이면 폴스 나머지는 모두 트루
  로케이션.해시에 샵만 들어오면 빈값을 반환함
  첫 진입일때는 겟뉴스리스트를 호출하고
  해시값이 존재하면 겟뉴스컨텐츠를 호출한다
*/

