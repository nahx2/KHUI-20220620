// html에 있어서 겹친다고 뭐라함...
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDtVA_IYoYtVpeDuUF_UmKLFwOlg44CAic",
//   authDomain: "terrgym-demo-bac70.firebaseapp.com",
//   databaseURL:
//     "https://terrgym-demo-bac70-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "terrgym-demo-bac70",
//   storageBucket: "terrgym-demo-bac70.appspot.com",
//   messagingSenderId: "679211028162",
//   appId: "1:679211028162:web:d6839267c5c25146ccb55b",
// };

// // Initialize Firebase - 바로 호출하게 바꿔버림
// firebase.initializeApp(firebaseConfig);

// 화면이 렌더링되는 것과 스크립트 처리사이에 시간차
$(document).ready(function () {
  //수정하기하면 화면에 값이 보여지고 제목과 내용은 인풋으로 보여지기
  document.getElementById("modifying-btn").onclick = () => {
    console.log("수정 넘어왔나요?");
    const db = firebase.firestore();
    let params = new URLSearchParams(document.location.search);
    //모달2도 모달1과 같은 url이라 똑같이 가져옴
    let id = params.get("id");
    console.log(id);
    $("#exampleModalToggle").modal("show");
    const readModal2 = document.getElementById("exampleModalToggle");
    readModal2.addEventListener("shown.bs.modal", () => {
      db.collection("ntc")
        .doc(id)
        .get()
        .then((result) => {
          console.log(result.data());
          //인풋이기 때문에 밸류값으로 가져옴, content도 동일
          const subject = result.data().subject;
          $("#input-title2").val(subject);
          const writer = result.data().writer;
          $("#writer2").text(writer);
          const write_date = result.data().write_date;
          $("#write_date2").text(write_date);
          const content = result.data().content;
          $("#input-content2").val(content);
        });
    });
  };
});
// 수정완료버튼
$(document).ready(function () {
  document.getElementById("modify_complete").onclick = () => {
    console.log("수정완료 넘어왔나요?");
    const db = firebase.firestore();
    let params = new URLSearchParams(document.location.search);
    //모달2도 모달1과 같은 url이라 똑같이 가져옴
    let id = params.get("id");
    console.log(id);
    const moRef = db.collection("ntc").doc(id);
    // 파이어베이스는 수정하는 항목을 따로 지정해주어야함
    // 일단 타이틀이랑 내용만 수정할 수 있게 해둠
    return moRef
      .update({
        // input이니까 밸류값
        subject: $("#input-title2").val(),
        content: $("#input-content2").val(),
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
});

// 삭제버튼
$(document).ready(function () {
  document.getElementById("delete_complete").onclick = () => {
    console.log("삭제 넘어왔나요?");
    const db = firebase.firestore();
    let params = new URLSearchParams(document.location.search);
    //모달2도 모달1과 같은 url이라 똑같이 가져옴
    let id = params.get("id");
    console.log(id);
    //파이어베이스 삭제는 .delete()만 추가하면 됨 짱
    db.collection("ntc")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
});
$(document).ready(function () {
  //어떤버튼을 누르든 상관없이모달 2가 꺼지면 리로드되기
  //히든될때마다 리로드돼서 첫번째모달에선 못씀
  $("#exampleModalToggle").on("hidden.bs.modal", function () {
    console.log("모달2에서 첫창 넘어왔나요?");
    location.href = "gym-sc-main2.html";
  });
});
$(document).ready(function () {
  document.getElementById("mo1-close").onclick = () => {
    console.log("버튼 누르고 첫창 넘어왔나요?");
    location.href = "gym-sc-main2.html";
  };
});
