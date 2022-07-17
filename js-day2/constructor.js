//생성자 함수
//자바스크립트에서 함수는 객체이다
//ES6 클래스 추가됨
function Counter(){
  this.sum = 0;
  this.count = 0;
}

const obj = new Counter();
obj.count;
console.log(obj.count);
obj.sum += 1;
console.log(obj.sum);

//함수의 종료
//1.선언적 함수 : 이름을 붙여서 정의해 놓은 형태
//:자바스크립트 파일을 읽을 때 선언적 함수를 우선적으로 읽어줌
//:호출 위치가 자유로움
//2.익명함수 : 함수의 이름이 없이 정의하는 형태
//:익명함수 자체로는 호출이 불가능함
//:변수에 익명함수를 대입하거나 특정 이벤트 객체에 대입하는 식으로 호출 가능함
//3.대입형 함수 : 변수에 익명함수가 대입된 형태
//4.즉시 실행함수 : 함수가 자기자신을 정의하자마자 바로 자신을 호출함

function methodA(){
  const a =1;
  const b =2;
  console.log(a+b);
}
methodA();
const z = methodA();
console.log(z);

const minus = function(){
  const a =1;
  const b =2;
 console.log(a-b);
}
//선언하기 전에 호출하면 에러 발생
minus();
// 즉시 실행함수 예
// 첫번째 괄호 - 함수의 정의부
// 두번째 괄호 - 함수 호출하는 괄호
(
  function(){
    const a = 2;
    const b = 3;
    console.log(a+b);
  }
)();//두번째 괄호가 첫번째 괄호안에 함수를 호출해줌
(  function(x){
  let y = 1;
    console.log(x+y);
  }
)(5);

/*
  즉시 실행 함수를 쓰는 이유
  :원하지 않는 공간으로 값이 빠져나가지 못하게 할 때
  :즉시 실행 함수 안쪽의 값들을 캡슐화 할 때
*/