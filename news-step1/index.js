// const content = document.createElement('sel')
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
        const li = document.createElement("li");
        // const a = document.createElement("a")
        // a.href = result[i].title;
        li.innerHTML = result[i].title;//텍스트 노드 추가
        // li.appendChild(a);
        ul.appendChild(li);
        // li.innerHTML = result[i].title;
        // ul.appendChild(li);
        
      }
    document.getElementById("root").appendChild(ul);
    // document.textContent(result[i].title);
    
  })
  // console.log(result[i].title)
  .catch(error => console.log('error', error));




