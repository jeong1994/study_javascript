//scope

//전역변수
if(10 > 1){
  var data = 100; // 지역변수 같지만 함수의 scope가 아니기 때문에 영역 밖에서 사용이 가능
  console.log(data);
}
console.log(data);

//지역변수
for(let i = 0; i < 10; i++){
  console.log(i);
}
// console.log(i); // let 키워드로 i를 선언하면 오류 발생

// for(var i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i); // var 키워드로 i를 선언하면 마지막 i < 10 비교 전 증감식으로 10이 되기 때문에 10출력

// for(const i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i); // const는 애초에 상수 선언이기 때문에 오류 발생







