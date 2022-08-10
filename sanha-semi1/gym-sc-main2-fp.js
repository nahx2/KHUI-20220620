const firebaseConfig = {
  apiKey: "AIzaSyDtVA_IYoYtVpeDuUF_UmKLFwOlg44CAic",
  authDomain: "terrgym-demo-bac70.firebaseapp.com",
  databaseURL: "https://terrgym-demo-bac70-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "terrgym-demo-bac70",
  storageBucket: "terrgym-demo-bac70.appspot.com",
  messagingSenderId: "679211028162",
  appId: "1:679211028162:web:d6839267c5c25146ccb55b"
};

// Initialize Firebase

  firebase.initializeApp(firebaseConfig);



  //  페이지네이션
  //전체레코드 갯수
  class PageBar {
    totalRecord;
    //페이지당 레코드 수
    numPerPage; // 10개씩이다
    //블럭당 디폴트 페이지 수 
    pagePerBlock = 5;
    //총페이지 수
    totalPage;
    //총블럭 수
    totalBlock;
    //현재 내가 바라보는 페이지 수
    nowPage;
    //현재 내가 바라보는 블럭 수
    nowBlock;
    //적용할 페이지 이름
    pagePath;
    pagination;
    // 자바와는 다르게 오버로딩을 지원하지 않ㅇ아..컨벤션
    constructor(numPerPage, totalRecord, nowPage, pagePath) {
      this.numPerPage = numPerPage;
      this.totalRecord = totalRecord;
      //alert(totalRecord);
      this.nowPage = nowPage;
      this.pagePath = pagePath;
      this.totalPage = Math.ceil(this.totalRecord / this.numPerPage); // 47.0/10=> 4.7 4.1->5page 4.2->5page
      this.totalBlock = Math.ceil(this.totalPage / this.pagePerBlock); //5.0/2=> 2.5-> 3장
      //현재 내가바라보는 페이지 : (int)((double)4-1/2)
      this.nowBlock = Math.floor(this.nowPage / this.pagePerBlock);
    }
    //setter메소드 선언
    setPageBar() {
      console.log("nowBlock:" + this.nowBlock);
      let pageLink = "";
      //전체 레코드 수가 0보다 클때 처리하기
      if (this.totalRecord > 0) {
        //nowBlock이 0보다 클때 처리
        //이전 페이지로 이동 해야 하므로 페이지 번호에 a태그를 붙여야 하고
        //pagePath뒤에 이동할 페이지 번호를 붙여서 호출 해야함.
        if (this.nowBlock > 0) {
          //(1-1)*2+(2-1)=1
          pageLink +=
            "<button><a href='" +
            this.pagePath +
            "?nowPage=" +
            ((this.nowBlock - 1) * this.pagePerBlock +
              (this.pagePerBlock - 1)) +
            "'>";
          pageLink += "<img border=0 src='./images/bu_a.gif'>";
          pageLink += "</a></button>&nbsp;&nbsp;";
        }
        for (let i = 0; i < this.pagePerBlock; i++) {
          //현재 내가 보고 있는 페이지 블록 일때와
          if (this.nowBlock * this.pagePerBlock + i == this.nowPage) {
            pageLink +=
              "<b>" +
              (this.nowBlock * this.pagePerBlock + i + 1) +
              "</b>&nbsp;";
          }
          //그렇지 않을 때를 나누어 처리해야 함.
          else {
            pageLink +=
              "<button><a href='" +
              this.pagePath +
              "?nowPage=" +
              (this.nowBlock * this.pagePerBlock + i) +
              "'>" +
              (this.nowBlock * this.pagePerBlock + i + 1) +
              "</a></button>&nbsp;";
          }
          //모든 경우에 pagePerBlock만큼 반복되지 않으므로 break처리해야 함.
          //주의할 것.
          if (this.nowBlock * this.pagePerBlock + i + 1 == this.totalPage)
            break;
        }
        //현재 블록에서 다음 블록이 존재할 경우 이미지 추가하고 페이지 이동할 수 있도록
        //a태그 활용하여 링크 처리하기
        if (this.totalBlock > this.nowBlock + 1) {
          pageLink +=
            "&nbsp;&nbsp;<a href='" +
            this.pagePath +
            "?nowPage=" +
            (this.nowBlock + 1) * this.pagePerBlock +
            "'>";
          pageLink += "<img border=0 src='/images/bu_b.gif'>";
          pageLink += "</a>";
        }
      }
      this.pagination = pageLink;
    }
    //getter메소드 선언
    getPageBar() {
      this.setPageBar();
      return this.pagination;
    }
  }

  //데이터 가져오기
  const db = firebase.firestore();
  let num = 0;
  let total = 0;
    let numPerPage = 3;
    let nowPage = 0;
    let param = new URLSearchParams(document.location.search);
    nowPage = param.get("nowPage");

  db.collection("ntc")
  .orderBy("write_date","desc")
  .get()
    .then((snapshot) => {
      
      console.log(snapshot); //[Object, Object] -> JSON.parse

      console.log(JSON.stringify(snapshot));
      total = snapshot.docs.length;
      console.log("전체레코드수==>" + total);
      for (
          let i = nowPage * numPerPage;
          i < nowPage * numPerPage + numPerPage;
          i++
        ) {
          if (total === i) break;
          num = i;
          console.log(
            snapshot.docs[i].id + ", 제목" + snapshot.docs[i].data().subject
          );

        const template = `
        <tr>
            <th scope="row">${++num}</th>
            <td>${snapshot.docs[i].data().cate}</td>
            // 수정으로 넘어가게 하는 모달창임 수정 없는 모달창은 그냥 cs-modal로
            <td><a href="./cs-modal-modify.html?id=${snapshot.docs[i].id}"><button type="button" class="btn btn-primary" data-bs-toggle="modal">
              ${snapshot.docs[i].data().subject}
            </a></td>
            <td>${snapshot.docs[i].data().writer}</td>
            <td class="write_d">${snapshot.docs[i].data().write_date}</td>
          </tr>
        `;
        $(".board-content").append(template);
      }//데이터 넣기
      $(".pagenation").append("");
      /*페이지 네비게이션 처리 위치*/
      const pagePath = "gym-sc-main-fp.html"
        const pb = new PageBar(numPerPage, total, nowPage, pagePath);
        // out.print(pb.getPageBar()); class PageBar에서 생성되는 링크
        $(".pagenation").append(pb.getPageBar());
    });





//공지사항
$(document).ready(function () {
  document.getElementById("gong").onclick = () => {
    console.log("공지사항 넘어왔나요??");
    $("tr").empty();
    const db = firebase.firestore();
    let num = 0;
    db.collection("ntc")
      .where("cate", "==", "공지사항")
      .get()
      .then((snapshot) => {
        snapshot.forEach((item) => {
          // console.log(doc.data());
          const template = `
          <tr>
              <th scope="row">${++num}</th>
              <td>${item.data().cate}</td>
              <td><a href="./read.html?id=${
                item.id
              }"><button type="button" class="btn btn-primary" data-bs-toggle="modal">
                ${item.data().subject}
              </a></td>
              <td>${item.data().writer}</td>
              <td>${item.data().write_date}</td>
            </tr>
          `;
          $(".board-content").append(template);
        });
      });
  };
});
