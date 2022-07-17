// shallow copy : 배열의 얕은 복사
// 자바스크립트에서는 얕은 복사가 된다
// Array.from, concat, slice, spread(...), Object.assign로 하면 모두 다 얕은 복사임
const sonata = {carColor:'red',speed : 50};
const casper = {carColor:'white',speed : 0};
const pride = {carColor:'black',speed : 60};

const hyundai = [sonata, casper];
const kia = Array.from(hyundai);
console.log(hyundai);
sonata.speed = 100;
console.log(kia);