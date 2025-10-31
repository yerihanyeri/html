// const scosFor = [85, 92, 78, 65, 95];
// let totFor = 0;
// const stuCntFor = scosFor.length;

// for (let i = 0; i < stuCntFor; i++) {
//   totFor += scosFor[i];
// }

// const avgFor = totFor / stuCntFor;

// console.log(`총점: ${totFor}`);
// console.log(`총점: ${avgFor.toFixed(1)}`);

// const scosDoWhile = [85, 92, 78, 65, 95];
// let totDoWhile = 0;
// const stuCntDoWhile = scosDoWhile.length;
// let iDoWhile = 0;

// // while (iwhile < stuCntWhile) {
// //   totWhile += scosWhile[iwhile];
// //   iwhile++;
// // }
// do {
//   totDoWhile += scosDoWhile[iDoWhile];
//   iDoWhile++;
// } while (iDoWhile < stuCntDoWhile);

// const avgDoWhile = totDoWhile / stuCntDoWhile;
// console.log(`총점: ${totDoWhile}`);
// console.log(`평균: ${avgDoWhile.toFixed(1)}`);

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 함수란 미리 만들어 놓은 기능을 의미한다
// 함수 내부에는 게산식을 포함하여 다양한 코드가 들어간다
// 함수 내부를 구성하는 코드는 개발자가 의도한 그 어떤 내용이라도 들어간다
// 함수를 만드는 이유는 제시용을 위해서이다. - 효율
// post()가 뭔지
//  불변이라는 뜻을 가진 변수를 사용해서 변수를 함수처럼 사용한다
// 화살표 함수 arrow function

//  매개변수가 없는 함수는 결론적으로 해당하는 기능을 실행할 때 별도의 재료가 필요없다
//  매개변수가 있는 함수는 결론적으로 해당하는 기능을 실행할 때 별도의 재료가 필요하다

// 두 수의 덧셈 결과를 출력하는 함수 만들기

const add = (a, b) => {
  let tot = a + b;
  console.log(tot);
};
//  여기서 a,b는 믹서기에서 유리통의 의미를 가진다. 또한 원칙적으로 재료의 갯수와 매개변수(유리통)의 갯수는 동일해야한다. 예를들어 유리통이 2갠데 재료가 3개가 들어올 순 없다.
//
add(17, 29);
//  여기서 두 숫자는 인수의 개념에 해당한다. (재료)
// 설명서는 항상 자세하게

const add = (a, b) => {
  return a + b;
};

let result = add(17, 29);
console.log(result);
// 함수의 모양 세가지? 뭐였드라,,,,,,
//  return - Stop -> 밖같이라는 개념이 없음.
// 사용자가 함수를 호출한다 - call - 해당 함수가 실행이 되다가 해당함수에 리턴문이 있으면 해당문 이하는 싸그리 무시

// 함수를 만들면 전역전 개념으로 만들어진다
// 전역이라는 의미는 프로그램 종료되기 전까지 계속 메모리에 상주한다
// 프로그램이 종료되는 시점에서 사라진다는 의미이다.
// 전역이 많아지면 많아질 수록 사용자의 입장에선 메모리가 크기 때문에 불편할 수 있다
// 일회용 함수 - 필요할 때만 쓸 수 있기에 용량을 줄이기에 용이하다 - 즉시 실행

(function () {
  let message = "안녕하세요";
  console.log(message);
})();

(function (name) {
  console.log(`안녕하세요, ${name}`);
})("홍길동");

const result = (function () {
  const a = 10;
  const b = 20;
  return a + b;
})();
console.log(`값: ${result'}`)
  


  객체: key & value 
개발자 마음대로 붙일 수 있다
배열: index & value

const person = {
  name: "홍길동",
  age: 20,
};
console.log(person["name"]);
console.log(person["age"]);




const pw = "134";
// pw라는 변수는 문자열 형태이다
// 문자열 형태라는 의미는 String라는 객체(툴) 기반으로 찍어낸 붕어빵이다
// 원본 툴 내부에 속성과 매서드가 있다면 그속성과 메서드를 그대로 사용할 수 있다

if (pw.length < 4) {
}




const email = "test@naver.com";

if (email.includes("@") === false) {
  console.log("이메일 형식이 틀립니다");
}
if (email.indexOf("@") <= -1) {
  console.log("이메일 형식이 틀립니다");
}
// 두 메서드는 실행(호출)하면 그 결과가 발생한다. console
// 그 메서드의 실행 결과가 자동으로 반환되는 구조이다
// 메서드, 속성에 대해 공부하기
// 특정 문자열과 일치하는 첫 번쨰 문자의 인덱스를 반환하는데 찾지못면 -1을 반환한다


// Array 객체

// 파괴적 메서드
// 비파괴적 메서드


// forEach(): 배열의 각각의 칸을 처음부터 마지막까지 하나씩 순회하면서 작업을 진행한다.
// forEach(현재 요소, 인덱스, 전체 배열)

const fruits = ["사과", "오렌지", "배"];

fruits.forEach(function (fruit) {
  console.log(fruit + "는 맛있어요!!!");
});




const arr = [10, 20, 30, 40];
arr.forEach(function (v) {
  console.log(v);
});

// String 객체-문자/문자열 형태의 자료를 원본에서 찍어내었기 때문에 원본이 소유하고 있는 속성/매서드를 그대로 이용할 수 있다. 객체
// Date 객체

const date1 = new Date("2022-10-05");
const date2 = new Date("2025-10-05");
const date3 = new Date();

// let const var - 자료의 형태
// 애네들 다른 점과 사용법 알아보기
// 객체에 대한 이해 확실히 하기
// 자바가 아닌 다른 곳에서는 원본 객체를 쓴다
// 객체지양?

// 객체는 -> 인스턴스
// 원본 설계도에 다양한 속성과 메서드가 있는데 그 중에서 설계도 이름과 완벽하게 일치하는 메서드가 있다
// 그 메서드를 "생성자"라고 한다
// "설게도 대로 그대로 똑같이 만드는 기능을 가지고 있다"

// Car라는 설계도가 있다
// Car(color)
// const car1 = new Car(red)
