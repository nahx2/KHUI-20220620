function searchList() {
  console.log("검색리스트에 도착했나요?");
  $("tbody").empty();
  const choice = $("#gubun option:selected").val();
  const user_search = $("#keyword").val();
  alert("검색" + choice + user_search);
  let num = 0;
  let total = 0;
  let numPerPage = 3;
  let nowPage = 0;
  let param = new URLSearchParams(document.location.search);
  nowPage = param.get("nowPage");

  db.collection("ntc")
    .where(choice, "==", user_search)
    // .orderBy("write_date", "desc")
    .get()
    .then((snapshot) => {
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
        // snapshot.forEach((item) => {
        // console.log(doc.data())
        // 코드양은 늘어나더라도(DOM Tree구조는 잘 보임) 복잡도 증가하지 않도록
        const template = `
    <tr>
              <th scope="row">${++num}</th>
              <td>${snapshot.docs[i].data().cate}</td>
              // 수정으로 넘어가게 하는 모달창임 수정 없는 모달창은 그냥 cs-modal로
              <td><a href="./cs-modal-modify.html?id=${
                snapshot.docs[i].id
              }"><button type="button" class="btn btn-primary" data-bs-toggle="modal">
                ${snapshot.docs[i].data().subject}
              </a></td>
              <td>${snapshot.docs[i].data().writer}</td>
              <td class="write_d">${snapshot.docs[i].data().write_date}</td>
            </tr>
          `;
        $(".board-content").append(template);
      }
    });
}
