//재귀함수
//코딩테스트에 자주 나옴
//자기 자신을 호출하는 함수 , 반복적인 작업

//팩토리얼 계산 : 3! = 3 * 2 * 1
//팩토리얼 : 1부터 n까지의 모든 자연수를 곱한 값
function factorial(n){
  if(n === 0){
    return 1;
  }
  return n * factorial(n-1);
}

console.log(factorial(4));

//주어진 숫자부터 0까지 출력하는 재귀함수
function countDown(n){
  //종료조건
  if(n<0){
    return; //리턴옆에 값이 있다면 해당 수를 반환
        //값이 없다면 함수 종료의 의미도 있음
  }
  console.log(n);
  countDown(n-1);
}

countDown(10);

//1부터 매개변수로 받은 숫자까지의 합 계산하는 재구함수
function sumNum(n){
  if(n == 0){
    return 0;
  }
  return n + sumNum(n-1);
}

console.log(sumNum(3));

//hello 문자열을 재귀함수를 이용하여 거꾸로 출력하기
//olleh
//substr(문자번호) : 매개변수에 값이 들어가면 해당 해당번째 문자를 제외한 나머지 부분만 남음
//charAt(index) : 문자열에서 인덱스의 문자만 추출
function reverseStr(str){
  if(str === ""){
    return;
  }
  reverseStr(str.substr(1));
  console.log(str.charA(0));
}

reverseStr("hello");
//reverseStr("hello"); 호출
//reverseStr("ello"); 호출
//reverseStr("llo"); 호출
//reverseStr("lo"); 호출
//reverseStr("o"); 호출
//console.log("o"); 출력
//console.log("l"); 출력
//console.log("l"); 출력
//console.log("e"); 출력
//console.log("h"); 출력