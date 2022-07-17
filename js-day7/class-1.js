// 클래스 - es6에서 지원하게 됨
// 공통분모 : 전변초기화를 담당한다 - 생성자 함수가
class Car {
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
  }
  // 사용자 정의 함수를 가질 수 있다. -> 제공되는 함수가 있다 - window, document.write()
  display = () => {
    console.log(`${this.name}, ${this.emoji}`);
  }
}
//myCar(yourCar)는 Car클래스의 인스턴스이다.
const myCar = new Car("Sonata","🚗");
const yourCar = new Car("Pride","🚕");

console.log(myCar);
console.log(yourCar);
const herCar = myCar;
console.log(myCar === yourCar);
console.log(myCar === herCar);
console.log(myCar.emoji, myCar.name);
yourCar.display();
herCar.display();
const himCar = {
  name : "싼타페",
  speed: 50
}