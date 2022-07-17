//자료형
/*
  원시형 타입(Prinative type)
  문자, 숫자, 논리형, undefinded - 변수를 선언하고 값을 할당하지 않으면 undefined가 저장됨
  참조형 타입(Reference type)
  :값이 위치하고 있는 참조 주소값만 메모리에 저장 - 함수도 객체이다
  null - 특정 변수의 값을 비워둘 때
  , array - 연관된 값들을 그룹으로 묶어서 관리
  , 객체 - Object데이터를 key라는 인덱싱을 통해 자료를 구조적으로 묶어놓은 상태
*/

let v;
console.log(v);
v = null;
console.log(v);
console.log(typeof 123);
console.log(typeof '123');
console.log(typeof null);
console.log(typeof undefinded);

let name = 'tomato';
let color = 'red';
let display = '.';