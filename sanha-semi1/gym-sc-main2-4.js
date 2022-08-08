const firebaseConfig = {
  apiKey: "AIzaSyDtVA_IYoYtVpeDuUF_UmKLFwOlg44CAic",
  authDomain: "terrgym-demo-bac70.firebaseapp.com",
  databaseURL:
    "https://terrgym-demo-bac70-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "terrgym-demo-bac70",
  storageBucket: "terrgym-demo-bac70.appspot.com",
  messagingSenderId: "679211028162",
  appId: "1:679211028162:web:d6839267c5c25146ccb55b",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
let num = 0;
let unit = 3;
const container = document.getElementsByClassName("board-content");
let newsList = [];
const store = {
  currentPage: 1,
};
// function getNewsList() {
db.collection("ntc")
  .orderBy("write_date", "desc")
  .limit(unit)
  .get()
  .then((snapshot) => {
    snapshot.forEach((item) => {
      // console.log(doc.data());
      newsList.push(` <tr>
      <th scope="row">${++num}</th>
      <td>${item.data().cate}</td>
      // 수정으로 넘어가게 하는 모달창임 수정 없는 모달창은 그냥 cs-modal로
      <td><a href="./cs-modal-modify.html?id=${
        item.id
      }"><button type="button" class="btn btn-primary" data-bs-toggle="modal">
        ${item.data().subject}
      </a></td>
      <td>${item.data().writer}</td>
      <td class="write_d">${item.data().write_date}</td>
    </tr>
        `);
    }); //데이터 넣기
    $(".board-content").append(newsList);
    console.log(newsList.length);
    console.log(newsList);
    console.log(newsList[newsList.length - 1]);
    // pages[i].addEventListener("click", () => {
      // $(".pag").click(function () {
      console.log(`btnc 호출?`);
      console.log(newsList[newsList.length - 1]);
      $("tr").empty();
      db.collection("ntc")
        .orderBy("write_date", "desc")
        .startAfter(newsList[newsList.length - 1])
        .limit(unit)
        .get()
        .then((snapshot) => {
          snapshot.forEach((item) => {
            // console.log(doc.data());
            newsList.push(` <tr>
          <th scope="row">${++num}</th>
          <td>${item.data().cate}</td>
          // 수정으로 넘어가게 하는 모달창임 수정 없는 모달창은 그냥 cs-modal로
          <td><a href="./cs-modal-modify.html?id=${
            item.id
          }"><button type="button" class="btn btn-primary" data-bs-toggle="modal">
            ${item.data().subject}
          </a></td>
          <td>${item.data().writer}</td>
          <td class="write_d">${item.data().write_date}</td>
        </tr>
            `);
          });
          $(".board-content").append(newsList);
        });
      // }); //데이터 넣기
    }
  });
newsList.push(`<div>
    <a href="#/page/${
      store.currentPage > 1 ? store.currentPage - 1 : 1
    }">이전페이지</a></div>
    <div  class ="pag" ><a href="#/page/${store.currentPage + 1}">다음페이지</a>
  </div>
`);
// Get the last document

// pages[i].addEventListener("click", () => {
//   console.log(`여긴왔니`);
//   pagingSeq = pages[i].value;
//   console.log(`클릭된 버튼의 값은 : ${[pagingSeq]}`);

// }
// })

// Construct a new query starting at this document.
// Note: this will not have the desired effect if multiple
// cities have the exact same population value.

// Use the query for pagination
// ...

function router() {
  const hashValue = location.hash; //#/page/2 //substring (7)
  // http://127.0.0.1:59985/news-step4/index.html - 디폴트 처음일때
  // http://127.0.0.1:59985/news-step4/index.html#3214567
  if (hashValue === "") {
    $("tr").empty();
    // getNewsList();
    // #/page/2 숫자2는 이동해야 되는 이전 페이지
    // http://127.0.0.1:59985/news-step4/index.html#/page/2
    // console.log("http://localhost:5000/index.html#/page/2".indexOf("#/page/"));
  } else if (hashValue.indexOf("#/page/") >= 0) {
    //hashValue.substring(7); // 문자열
    store.currentPage = Number(hashValue.substring(7));
    console.log(store.currentPage);
    btnc();
  }
} ////////////////////////end of router
window.addEventListener("hashchange", router);
router();
