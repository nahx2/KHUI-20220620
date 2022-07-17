//페이징 처리에 필요한 변수 선언하기
//isert here - currentPage -> react에서는 redux
const store = {
  currentPage: 1
};


const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function getNewsList(){
  console.log('getNewsList 호출 성공');
  fetch(NEWS_URL, requestOptions)
    .then(response => response.json())
    .then(result => {
      const newsList = [];
      let template = `
        <div>
          <h1>Heaker News</h1>
          <ul>
            {{__news_list__}}
          </ul>
          <div>
            <a href="#/page/{{__prev_list__}}">이전페이지</a>
            <a href="#/page/{{__next_list__}}">다음페이지</a>
          </div>
        </div>
      `;
      for(let i=(store.currentPage-1)*10;i<store.currentPage*10;i++){
        newsList.push(`
          <li>
            <a href='#${result[i].id}'>
              ${result[i].title}(${result[i].comments_count})
            </a>
          </li>
        `);
      }////////// end of for
      template = template.replace("{{__news_list__}}",newsList.join(""));
      template = template.replace("{{__prev_list__}}",store.currentPage>1?store.currentPage-1:1);
      template = template.replace("{{__next_list__}}",store.currentPage+1);
        container.innerHTML = template;
    }).catch(error => console.log('error', error));
}///////////////////// end of getNewsList()


  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  
  function getNewsContent(){
    const id = this.location.hash.substring(1);// #31914288에서 첫번째 자리 #은 자라내고 쓴다
    fetch(CONTENT_URL.replace("@id", id), requestOptions2)
      .then(response => response.json())
      .then(result => {
        container.innerHTML = `
          <h1>${result.title}</h1>
          <div>
            <a href="#/page/${store.currentPage}">목록으로</a>
          </div>
        `;
      })
      .catch(error => console.log('error', error));
  }


  function router() {
    const hashValue = location.hash;//#/page/2 //substring (7)
    // http://127.0.0.1:59985/news-step4/index.html - 디폴트 처음일때
    // http://127.0.0.1:59985/news-step4/index.html#3214567
    if(hashValue === "") {
      getNewsList();
      // #/page/2 숫자2는 이동해야 되는 이전 페이지
      // http://127.0.0.1:59985/news-step4/index.html#/page/2
      // console.log("http://localhost:5000/index.html#/page/2".indexOf("#/page/"));
    } else if(hashValue.indexOf("#/page/")>=0) {
      //hashValue.substring(7); // 문자열
      store.currentPage = Number(hashValue.substring(7));
      console.log(store.currentPage);
      getNewsList();
    } else {
      getNewsContent();
    }
  }////////////////////////end of router
  window.addEventListener("hashchange", router);
  router();