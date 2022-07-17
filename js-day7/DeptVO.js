export class DeptVO{
  constructor(deptno, dname, loc){
    this.deptno = deptno;
    this.dname = dname;
    this.loc = loc;
  }
  get getDeptno(){
    return this.deptno;
  }
  set setDeptno(value){
    this.deptno = value;
  }
  get getDname(){
    return this.dname;
  }
  set setDnaem(value){
    this.dname = value;
  }
  get getLoc(){
    return this.loc;
  }
  set setLoc(value){
    this.loc = loc;
  }
}

const dvo = new DeptVO(
  
);
console.log(dvo.deptno);
dvo.setDeptno = 20;
console.log(dvo.getDeptno);