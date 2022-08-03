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
    console.log("넘어왔나요?");
    const db = firebase.firestore();
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id"); //문자열 "Jonathan"
    console.log(id);
    $("#exampleModalToggle").modal("show");
    const readModal2 = document.getElementById("exampleModalToggle");
    readModal2.addEventListener("shown.bs.modal", () => {
      db.collection("ntc")
        .doc(id)
        .get()
        .then((result) => {
          console.log(result.data());
          const subject = result.data().subject;
          $("#input-title2").val(subject);
          const writer = result.data().writer;
          $("#writer2").text(writer);
          const write_date = result.data().write_date;
          $("#write_date2").text(write_date);
          const content = result.data().content;
          $("#input-content2").val(content);
        });
      console.log("넘어왔나요?");
    });
  };
});
