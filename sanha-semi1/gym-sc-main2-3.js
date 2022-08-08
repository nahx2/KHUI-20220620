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

/********************************* 전역 스코프 ************************************************ */

const db = firebase.firestore();
let num = 0;
const btnPage = 0;
// 한 페이지에 보여질 게시글의 갯수
let unit = 3;
const newsList = [];
const store = {
  currentPage: 1,
};
function getNewsList() {
  console.log("getNewsList 호출 성공");

  let first = db
    .collection("ntc")
    .orderBy("write_date", "desc")
    .limit(unit)
    .get()
    .then((snapshot) => {
      snapshot.forEach((item) => {
        newsList.push(`
  <tr>
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
        $(".board-content").append(newsList);
      });
    });
  //insert - 페이징처리를 고려한 for문으로 변경
  var lastVisible = first[first.length - 1];
  console.log("last", lastVisible);
  // Get the last visible document
  var next = db
    .collection("ntc")
    .orderBy("write_date", "desc")
    .limit(unit)
    .startAfter(lastVisible)
    .get()
    .then((snapshot) => {
      snapshot.forEach((item) => {
        newsList.push(`
    <tr>
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
        $(".board-content").append(newsList);
      });
    });
  newsList.push(`<div>
    <a href="#/page/${
      store.currentPage > 1 ? store.currentPage - 1 : 1
    }">이전페이지</a>
    <a href="#/page/${store.currentPage + 1}">다음페이지</a>
    </div>
    `);
}
///////////////////// end of getNewsList()

// Construct a new query starting at this document,
// get the next 25 cities.
