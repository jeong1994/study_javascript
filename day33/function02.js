//함수2

//일반함수
//1부터 입력받은 값까지 더한 합 반환 함수
function total(number){
  let total = 0;
  for(let i = 1; i <= number; i++){
    total += i;
  }
  return total;
}

console.log(total(10));

//익명함수 정의
let total2 = function(number){
  let sum = 0;
  for(let i = 1; i <= number; i++){
    sum += i;
  }
  return sum;
};

//익명함수 호출
let result = total2(5);
console.log(result);