// 함수

//두개의 숫자를 더한 값을 출력하는 기능

let num1 = 100;
let num2 = 200;
//매개변수x, 리턴값x
function add(){
  console.log(num1 + num2);
}
//매개변수x, 리턴값x 함수 호출 => 함수명()
add();

// 함수정의(매개변수 o, 리턴값x)
function add2(num1, num2){
  console.log(num1 + num2);
}

//매개변수o, 리턴값x 함수호출 => 함수명(인수1,인수2)
add2(10, 20);

//매개변수x 리턴값o 함수정의
let num3 = 15;
let num4 = 23;
function add3(){
  return num3 + num4;
}

let result = add3();
console.log(result);
console.log(add3());

//매개변수o, 리턴값 o
function add4(num1, num2){
  return num1 + num2;
}
let result2 = add4(10,40);
console.log(result2);
console.log(add4(10, 20));

//메소드 선언/호출방식과 동일 그러나 객체를 사용하진 않음
