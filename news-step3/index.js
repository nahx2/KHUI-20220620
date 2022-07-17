const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
const content = document.createElement('div');
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

fetch(NEWS_URL, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    const ul = document.createElement("ul");
    for(let i=0;i<30;i++){
      const div = document.createElement("div");
      div.innerHTML =`
        <li>
          <a href='#${result[i].id}'>
            ${result[i].title}(${result[i].comments_count})
          </a>
        </li>
      `;
      ul.appendChild(div.firstElementChild);
      container.appendChild(ul);
      container.appendChild(content);
      //document.getElementById("root").appendChild(ul);
    }
    container.appendChild(ul);
    container.appendChild(content);
  })
  .catch(error => console.log('error', error));

  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  
  window.addEventListener("hashchange", () => {
    console.log(location.hash);
    const id = this.location.hash.substring(1);// #${result[i].id}에서 첫번째 자리 #은 잘라내고 쓴다
    fetch(CONTENT_URL.replace("@id", id), requestOptions2)
      .then(response => response.json())
      // callback
      //.then(result => console.log(result))
      .then(result => {
        const title = this.document.createElement("h1");
        title.innerHTML = result.title;
        content.appendChild(title);
      })
      .catch(error => console.log('error', error));
  });