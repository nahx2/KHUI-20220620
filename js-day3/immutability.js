//불변성을 지킨다 - 에러, 버그 예빵할 수 있음
function callByReference(object){
  console.log(object);
  object.ename ='tiger';
  console.log(object);
}
const scott = {ename: 'scott'};
callByReference(scott)

function changeName(obj){
  return{...obj,ename:'king'};
}
let result = changeName(scott);//react 활용빈도가 아주 높다
console.log(result);