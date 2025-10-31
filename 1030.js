class Person {
  height = 180;
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // 왜 this 가 없으면 코딩이
  }
}
// 첫 문자 대문자는 클래스 - 설계도

console.log(Person.height);
// 잘못된 부분 이해가 잘 안감
let per1 = new Person();
//  변수    make 함수 (왜?) - 기본 생성자 - 함수가 없다는 말이 무슨 뜻이지? 소괄호 있으면 무조건 함수가 아닌가..?
// 1. 무조건 있어야 함 2.생략 - 있는 걸로 간주함 3. 그러나 두가지 이상의 옵션을 선택하는 경우가 나타나게 되면 필수 작성
console.log(per1.height);
// property -  속성
let per2 = new Person("홍", 29);
console.log(per2.name);
console.log(per2.age);

// get - 출력, 외부로 출력
// set - 입력 - 매개변수 필수

// class Car {
//   color;
//   door;
//   speed=0

//   constructor() {
//     this.color = color;
//     this.door = door;
//     this.speed = this.speed;
//   }
// }

// let car1 = new Car();
// console.log(per1.height);
// let car2 = new Car("홍", 29);
// console.log(per2.name);
// console.log(per2.age);

class Car {
  color;
  doorCount;
  speed = 0;

  constructor(color, doorCount) {
    this.color = color;
    this.doorCount = doorCount;
  }
  accelerate() {
    this.speed += 10;
    this.getCurrentStatus();
  }

  decelerate() {
    this.speed -= 10;
    if (this.speed < 0) {
      this.speed = 0;
    }
    this.getCurrentStatus();
  }

  getCurrentStatus() {
    console.log(this.speed);
    // 이 코드가 없다면 실행을 시켜야만 속도값이 나온다. 그래서 현재상태를 보겠다는 의미로 해석할 수 있다.
  }
}
const car1 = new Car();
const car2 = new Car("red", 4);
car2.getCurrentStatus();

// 자바스크립트에 내장 객체가 있다. String, Array, Date,.....
// 자바스크립트 언어 자체에 이미 만들어져 있는 클래스(Class)
