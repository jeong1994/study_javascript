//즉시 실행함수 (IIFE)
//정의되자마자 즉시 실행된다
//독립된 스코프를 만들 때 유용

(function () {
  console.log('즉시실행함수');
})();

(function (num1, num2) {
  console.log(num1 + num2);
})(10, 20);

//매개변수에 들어온 값의 총합구하기 (for문 이용)
(function (...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
})(10, 20, 30);

(function (...numbers) {
  let sum = numbers.reduce((acc, current) => acc + current, 0);
  console.log(sum);
})(10, 20, 30);
//reduce() : 배열의 요소를 순회하면서 합을 계산하는 메솓
//2개의 매개변수 acc : 누적값, current : 현재값, 0 : 초기값을 0으로 설정
//acc = 0 부터 시작하여 배열을 돌면서 누적합을 acc에 저장함