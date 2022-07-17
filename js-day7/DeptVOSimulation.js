import { DeptVO } from "./DeptVO";
// ES6 지원 import문
// NodeJS 지원 require('express') - CommonJS
const myDVO = new DeptVO(50,'개발부','부산');
console.log(myDVO.dname);
console.log(myDVO.deptno);
console.log(myDVO.loc);