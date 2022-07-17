const colors = ['green','red','blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//추가, 삭제
colors[4] = 'white';
console.log(colors);
delete colors[1];
console.log(colors);

// 배열 생성 방법
let array = new Array(3);
console.log(array);
array = new Array(1,2,3);
console.log(array);

array = Array.of(1,2,3,4,5);
console.log(array);
const deptnos = [10,20,30,];
array = Array.from(deptnos);
console.log(array);

array = Array.from({
  0:10,
  1:'개발부',
  2:'서울',
});
console.log(array);

