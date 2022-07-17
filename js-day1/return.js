//return을 명시적으로 하지 않으면 자동으로 undefined이 반환
// 함수 중간에 사용하면 함수가 종료됨




function hap(a,b){
  console.log(a+b);
}

let imsi = hap(2,3);

console.log(imsi);
function print2(num){
  if(num<0) return;
  console.log(num);
}

print2(-5);
print2(5);


//APP
//입력 - 처리 -출력

// 특정한 일을 수행하는 코드집합
// 유지보수, 재사용성, 가독성
// 함수도 오브젝트이므로 주소번지를 갖게 되고 함수가 있는 곳은 다른 곳이다.

// 함수의 이름은 함수를 참조함.
