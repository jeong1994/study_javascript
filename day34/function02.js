//익명함수와 화살표 함수

//함수정의 매개변수o 리턴값x
let printHello = function (name){
  console.log(`안녕하세요, ${name}님!`)
};

//함수호출 매개변수o 리턴값x
//함수명(인수);
printHello("정승환");
//변수를 함수처럼 호출하면 함수 안의내용이 출력된다

//ES6, 익명함수일 경우 function 키워드를 생략하고 =>로 함수를 선언할 수 있다

let data = function (){
  console.log("함수실행");
};

data();

let data2 = () => {
  console.log("화살표 함수 실행");
};

data2();

let addNum = function(num1,num2 = 100){
  return num1 + num2;
};

console.log(addNum(10, 20));
console.log(addNum(50));

let addNum2 = (num1, num2) => {
  return num1 + num2;
};

console.log(addNum2(5,3));
console.log(addNum2("hello ", "javascript"));

//콜백함수를 매개변수로 받고, 콜백함수 정의는 화살표 함수
function cal(num1, num2, result){
  result(num1, num2);
}

result = (num1, num2) => {
  console.log(num1 + num2);
  console.log(num1 - num2);
}

cal(10,20,result);

//두개의 매개변수를 받아서 내부에서 합을 계산하는 익명함수 (화살표함수)를 반환
function addNum3(num1, num2){
  return () =>{
    console.log(num1 + num2);
  };
};

//함수호출
console.log(addNum3(20, 3)); //[Function (anonymous)]
//익명함수를 반환하니까 [Function (anonymous)]가 출력됨
//익명함수가 실행된게 아니라 반환을 해주는 것임

let result3 = addNum3(20, 3); //반환된 익명 함수를 면수에 저장하면
console.log(result3); //[Function (anonymous)]
result3(); //변수명()를 호출하여 익명함수를 실행한다