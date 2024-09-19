// 10번
let now = new Date();
console.log(now, typeof now); //기본적으로 현재 날짜와 시간을 협정세계시(UTC)로 표시
console.log(now.toLocaleString()); 
//로컬시간대로 얻고싶다면 Date 객체의 메소드를 사용해서 변환

now.setHours(9);
console.log(now.getHours());

let date = new Date(2024, 0, 5, 12, 12, 40);
console.log(date.toLocaleString());

let date2 = new Date("2000-01-01");
console.log(date2.toLocaleString());
console.log(typeof date2.toLocaleString());


//현재 날짜와 시간을 함수로 만들고
//현재 시간과 특정 날짜 사이의 시간 간격(분 단위)을 계산하기
//함수명 : timeForToday

function timeForToday(date){
  const now = new Date();
  const target = new Date(date);

  //두 날짜 차이(밀리초 단위)
  const diffMs = Math.abs(now - target);

  //밀리초를 분으로 변환하여 소수점 버림(정수로 변환)
  const diffMins = Math.floor((diffMs / 1000) / 60);

  return diffMins;
}

console.log(timeForToday("2024-06-07"));

//1839 -> 일
//1일 24시간 * 60분
const min = 79601;
const day = Math.floor(min / (24*60));
console.log(day);