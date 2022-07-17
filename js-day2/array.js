//배열
//연관된 값들은 하나의 그룹으로 묶어서 나열한 자료구조
const colors =["red","green","blue"];
console.log(colors);
colors.forEach((color) => console.log(color));
colors.forEach(function(color){
  console.log(`element==>${color}`);
});
colors[1] ="black";
colors.map((color) => console.log("map",color));
//배열선언
const copy =[];

for(let i=0;i<colors.length;i++){
  copy.push(colors[i]);
  console.log(`copy[${i} : ${copy[i]}]`);
}

// colors.forEach(function(item){
//   copy.push(item);
//   console.log(:item);
// })



function add(a,b){
  const result = a+b;
  return result;
}

const add1 = function(a,b){
  const result = a+b;
  return result;
}
// 화살표함수 - 기존의 익명함수를 좀 더 쓰기편하게 축약한 형태
const add2 = (a,b) => {
  const result = a+b;
  return result;
}

add(3,4);
console.log(add2(3,4));

const msg = (txt) => {
  return txt;
}
// 내부로 전달되는 
const msg2 = (txt) => txt;

console.log('hello arrow function');
console.log(msg2('hello arrow function'));

