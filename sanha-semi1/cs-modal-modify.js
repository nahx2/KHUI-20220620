
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
      firebase.initializeApp(firebaseConfig);

      // 화면이 렌더링되는 것과 스크립트 처리사이에 시간차
      $(document).ready(function () {
        const db = firebase.firestore();
        let params = new URLSearchParams(document.location.search);
        let id = params.get("id"); //문자열 "Jonathan"
        console.log("사용자가 선택한 item.id" + id);
        $("#exampleModal").modal("show");
        const readModal = document.getElementById("exampleModal");
        readModal.addEventListener("shown.bs.modal", () => {
          db.collection("ntc")
            .doc(id)
            .get()
            .then((result) => {
              console.log(result.data());
              const subject = result.data().subject;
              $("#exampleModalLabel").text(subject);
              const writer = result.data().writer;
              $("#writer").text(writer);
              const write_date = result.data().write_date;
              $("#write_date").text(write_date);
              const content = result.data().content;
              $("#content").text(content);
            });
        });
      });
    