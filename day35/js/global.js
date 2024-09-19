//globalThis 변수를 이용해서 변수 num1과 변수 num2의 값을 바꾸는 함수 만들기
//함수명 : changNumber

globalThis.number;
let num1 = 10;
let num2 = 20;

function changNumber() {
  globalThis.number = num1;
  num1 = num2;
  num2 = globalThis.number;
  console.log(num1, num2);
}

console.log(`함수호출 전 : ${num1}, ${num2}`);
changNumber();
console.log(`함수호출 후 : ${num1}, ${num2}`);