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

  db.collection("ntc")
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
  newsList.push(`<div>
            <a href="#/page/${
              store.currentPage > 1 ? store.currentPage - 1 : 1
            }">이전페이지</a>
            <a href="#/page/${store.currentPage + 1}">다음페이지</a>
          </div>
        `);
}
///////////////////// end of getNewsList()
db.collection("ntc")
  .get()
  .then((snapshot) => {
    snapshot.forEach((item) => {
      // console.log(doc.data());
      totalSnapshot.push(`${item.data().subject}`);
    }); //데이터 넣기

    console.log(totalSnapshot[1]);
    console.log(totalSnapshot.length);
    console.log(`${totalSnapshot}`);
    // 전체 게시글의 갯수를 출력
    const boardTotalDocs = totalSnapshot.length;
    console.log(`전체 게시글의 갯수 boardTotalDocs ===> ${boardTotalDocs}`);

    //  만들 버튼의 갯수를 출력
    const btnPage = Math.ceil(boardTotalDocs / unit);
    console.log(`만들 버튼의 갯수 btnPage ===> ${btnPage}`);
    ////// h3태그 붙이기 START > 게시물 갯수 표시 (complete!!)
    const totalH3 = ` ✉️ 총 ${boardTotalDocs}개의 게시물이 있습니다.`;
    $("h3").append(totalH3);
    ///// h3태그 붙이기 END

    ////// 버튼 만들어 붙이기 START (complete!!)
    for (let i = 1; i <= btnPage; i++) {
      const html = `<input class= "pageNum" id="pageNum-${i}" type="button" value="${i}">`;
      $("ul.board-pagination").append(html);
    }

    ////// 버튼 만들어 붙이기 끝 END
  });

// const first = db.collection("ntc").orderBy("write_date", "desc").limit(unit);

// const firstSnapshot = first.get();
/*****************************Data불러오는 함수*******************************
 * getData()
 * 호출이 되면 데이터를 불러오고 html 파일의 tbody에 뿌려준다.
 * 문제!!!!! 절차의 문제
 * getData() 함수에 의해 tbody에 td가 있어야 한다.
 * 왜? td의 데이터를 가지고 pagination함수로 페이지네이션을 할 수 있기 때문이다.
 **************************************************************************/

async function initDataService() {
  console.log(`initDataService()함수가 호출되었습니다.`);
  db.collection("ntc")
    .orderBy("write_date", "desc")
    .limit(unit)
    .get()
    .then((snapshot) => {
      snapshot.forEach((item) => {
        console.log(`${item.id} => ${item.data()}`);
        const template = `
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
`;
        $(".board-content").append(template);
      });
    });
  btnc();
}
initDataService();

/*
버튼 누르면 ... 
*/
function btnc() {
  console.log(`btnc()함수가 호출되었습니다.`);
  // html에 생성된 버튼들을 모두 불러와서 pages변수에 담아준다. (배열의 형태임)
  let pages = document.getElementsByClassName("pageNum");
  // 클릭된 버튼의 숫자를 담을 변수
  let pagingSeq = 0;

  // 생성된 버튼배열의 수 만큼 반복문을 돌리면서 버튼이 클릭되면 클릭된 버튼 숫자가 출력되도록 한다.
  for (let i = 0; i <= btnPage.length; i++) {
    console.log(`${pages.length}`);
    pages[i].addEventListener("click", () => {
      console.log(`여긴왔니`);
      pagingSeq = pages[i].value;
      console.log(`클릭된 버튼의 값은 : ${[pagingSeq]}`);

      // 1번 버튼을 클릭하면 브라우저가 새로고침이 되도록 설정. 이미 뷰에 떠있는 1~unit까지의 게시글이 또 뜨지 않도록!!
      if (pagingSeq == 1) {
        $("tr").empty();
        window.location.reload(true);
      } else {
        // 기존에 있던 테이블에 게시글을 없애준다.
        $("tr").empty();

        let lastVisible = totalSnapshot.docs[unit * pagingSeq - 1];
        console.log(`기억해야 할 마지막 문서는 lastVisible : ${lastVisible}`);

        // 앞서 기억해둔 문서값으로 새로운 쿼리를 요청한다
        // 만약 기억해야 할 게시글이 5번이라면 6번부터 시작한다는 의미.
        const next = db
          .collection("ntc")
          .orderBy("write_date", "desc")
          .limit(3);

        const nextSnapshot = next.get();

        nextSnapshot.forEach((item) => {
          console.log(`${item.id} => ${item.data()}`);

          // 데이터가 있을 때에만!!!! 딱 23개만 테이블에 띄우기 위해!!
          // if(doc.data()){
          // console.log("데이터 있음");
          const template = `
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
                    `;
          $(".board-content").append(template);
          // }
        });
      }
    });
  }
}
