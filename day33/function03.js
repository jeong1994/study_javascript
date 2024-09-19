//함수 3

//두 수를 곱하는 익명함수를 정의하고 호출하여 결과 출력하기
let mul = function (num1, num2){
  return num1 * num2;
};

let product = mul(2,5);
console.log(product);

//두 숫자를 나누는 익명함수를 정의하고 이 함수를 다른함수의 매개변수로 전달하여 결과 출력
let div = function (num1, num2){
  return num1 / num2;
}
console.log(div(10, 5));

function cal(num1, num2, operation){
  return operation(num1, num2);
}

let result = cal(10, 2, div);
console.log(result);

//주어진 숫자를 2배로 만드는 함수를 반환하는 함수를 정의하고 호출하여 결과 출력
function createDouble(){
  return function (num){
    return num * 2;
  };
}

let doubleNum = createDouble();
let result2 = doubleNum(10);
console.log(result2);

//함수를 매개변수로 넘겨줄 수 있다
function repeatNum(num){
  for(let i = 0; i < num; i++){
    console.log(i);
  }
}

repeatNum(10); //0~9까지의 값

//reapeatNum은 num만큼 반복을 하는 함수
//내부에 console.lot() 함수를 사용하면 이 함수는 num만큼 출력하는 기능밖에 수행하지 못한다
//이러한 상황은 repeatNum() 함수가 console.log() 함수에 강하게 의존하고 있는 상태이기 때문에
//다른 기능을 수행할 수 없다

//특정 동작을 수행하는 익명함수 정의1
let printAll = function (n){
  console.log(n);
};

//특정 동작을 수행하는 익명함수 정의2
let printAddTen = function (n){
  if(n % 2 == 0){
    console.log(n + 10);
  }
};

//콜백함수를 매개변수로 받는 함수 정의
function repNum(num, f){
  for(let i = 0; i < num; i++){
    f(i);
  }
}

repNum(10, printAddTen); //매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고 한다★★★★★

repNum(10, printAll);

repNum(5, function(n){
  console.log(n * 2);
});