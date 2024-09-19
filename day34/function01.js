// 4번 : 일반함수와 매개변수(파라미터)

//디폴트 파라미터 : 값이 전달되지 않을 경우 초기값을 설정할 수 있다
//디폴트값은 매개변수의 가장 마지막부터 채워야한다(앞이나 중간부터 채우면 값이 나오지 않는다)
function addNum(num1 , num2= 2, num3 = 10){
  return num1 + num2 + num3;
}

let result = addNum(10);
console.log(result);

//아이디, 비밀번호, 이름을 전달받고 이름의 기본값은 사용자로 설정한다
//함수명 introduce
//매개변수 o , 리턴값 x
function introduce(id, pw, name = "사용자"){
  console.log(id, pw, name);
}

//함수 호출 : 함수명(인수1, 인수2)
introduce("abc1", "aa123");
introduce("abc1", "aa123", "김영선");
//디폴트 값이 설정된 매개변수에 인수를 넣게되면 덮어쓰기 된다

//가변파라미터 : 함수 호출 시 몇개의 값이 전달될지 모를 때 사용된다
function addNum2(...num){
  console.log(num, typeof num);
  // for(let i = 0; i < num.length; i++){
  //   console.log(num[i]);
  // }
  
  for(let i in num){
    console.log(num[i]);
  }
}

addNum2(1, 2, 3, 4, 5);
addNum2(1, 2, 3);

//이름과 나이를 가변인자(매개변수)로 전달받고 출력하기
//함수명 info
function info(...args){
  console.log("이름 : " + args[0]);
  console.log("나이 : " + args[1] + "살");
}

info("짱구", 5);

//객체를 사용하여 위와 결과 동일하게 나오도록 함수 선언
//함수명 : info1
let person1 = {name: "김영선", age:20};

function info1(obj){
  console.log("이름 : " + obj.name);
  console.log(`나이 : ${obj.age}살`);
}
info1(person1);