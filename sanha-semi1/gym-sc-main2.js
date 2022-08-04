


//검색관련
//제이쿼리를 사용한다.
$(document).ready(function () {
  button = document.querySelector(".btn.btn-outline-primary");
  input = document.getElementById("search_value");

  button.addEventListener("click", searchlist);

  function searchlist() {
    let value, item, name;

    value = document.getElementById("search_value").value.toUpperCase();
    item = document.getElementsByClassName("list-group-branch");

    //indexOf()를 활용한 검색기능 구현
    for (i = 0; i < item.length; i++) {
      name = item[i].querySelectorAll(
        ".list-group-item.list-group-item-action"
      );
      if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
        item[i].style.display = "flex";
      } else {
        item[i].style.display = "none";
      }
    }
  } // searchlist 함수 끝

  // 클릭,엔터키 이벤트
  input.focus();
  // 엔터했을 경우도 동일하게 처리
  /* input.addEventListener('keydown', (e) => {
    //console.log('key');
    if(e.key === "Enter"){
      alert('엔터');
      searchlist();
    }
  }); */
});




