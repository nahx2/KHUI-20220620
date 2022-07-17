const btns = document.querySelectorAll('ul li');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click',() => {
    console.log(i);//3
  });
  
}
for (var x = 0; x < btns.length; x++) {
  ((index)=>{
    btns[x].addEventListener('click',()=>{
      console.log('index =>',index);
    });
  }) (x);
  
}
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click',()=>{
//     console.log(i);
//   });
  
// }

//ES5 - var - 전역변수와 지역변수
//ES6 - Let변경
//호이스팅
//블록 안에서 선언된 지역변수가 코드 블록 밖으로
//강제로 전역변수화 됨