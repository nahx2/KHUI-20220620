const colors = ["red","green","blue"]
const colors2 = [...colors,"black"]
console.log(colors2);
const colors3 = ["grey",colors2]
console.log(colors3);
const colors31 = ["grey",...colors2]
console.log(colors31);
let dept1 = [10,20,30];
let dept2 = [40,50,60];
let dept3 = [...dept1,...dept2];
console.log(dept3);

let dept = {
  deptno : 10
  ,dname : "개발부"
  ,loc : "제주"
};
let emp = {
  empno : 7566
  ,ename : 'king'
  ,hiredate : '2022-05-17'
};
let obj3 = {...dept,...emp};
console.log(obj3);

let obj4 = {...emp,empno : 7800, ename : 'john', hiredate : '2000-11-28'};
console.log(obj4);

let depts = [
 {deptno:10, dname:'총무부', loc:'인천'},
 {deptno:20, dname:'개발부', loc:'제주'},
 {deptno:30, dname:'기획부', loc:'부산'},
];
let depts2 = [...depts,
 {deptno:40, dname:'인사부', loc:'서울'},
];
console.log(depts2);
let depts3 = [...depts2,
 {deptno:50},
];
console.log(depts3);