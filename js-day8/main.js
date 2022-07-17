const a = document.querySelector("a");


// console.log(a);
// console.dir(a); //돔의 구조르 본다
a.onclick = (event) => {
  //이벤트 핸들러는 event객체 주입이 안된다
  //그러니까 사용할 수 없다
  // 그러니까 이렇게 이벤트 처리하면 헤어진다
  event.prevenDefault();
  console.log("네이버클릭");
}
// 다른 개발자가 실수로 이벤트를 또 주면 이벤트가 덮어진다
a.onclick = (event) => {
  console.log("네이버다시클릭");
}
a.addEventListener('click',() => {
  console.log("2 네이버클릭")
})
a.addEventListener('click',() => {
  console.log("2 네이버다시클릭")
})

