//구조분해(destructuring assignment)
//배열이나 객체의 속성 혹은 값을 해체하여 그 값을 변수에 각각 담아 사용하는 표현식

const colors = ["red","green","blue"];
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];
console.log(color1,color2,color3);

const [c1,c2,c3] = colors;
console.log(`구조분해 할당 : ${c1} ${c2} ${c3}`);

// 복합 데이터 객체도 가능한가요?

const dept = {
  deptno : 10
  ,dname : "개발부"
  ,loc : "서울"
};

const {deptno, dname, loc} = dept;
console.log(deptno, dname, loc);