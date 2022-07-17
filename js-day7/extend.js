class Car{
  speed;
  carName;
  constructor(carName, speed){
    this.carName = carName;
    this.speed = speed;
  }
  //클래스 선언시 function 예약어를 사용하지 않음
  speedUp(){
    this.speed += 1;
  }
  speedDown(){
    this.speed -= 1;
  }
} 

class Sonata extends Car{
  speedUp(){
    super.speedUp();
    this.speed += 2;
  }
}

class K5 extends Car {
  stop(){
    this.speed = 0;
  }
}

const myCar = new Sonata("2022년형",30);
myCar.speedUp();
myCar.speedUp();
myCar.speedDown();
console.log(myCar.speed);
const yourCar = new K5("2022년형",30);