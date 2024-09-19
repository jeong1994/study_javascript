//객체

const user = {
  name : "정승환",
  age : 20,
  address : "수원시"
};

console.log(user);
console.log(typeof user);
console.log(user.name, typeof user.name);
console.log(user['address']);

const progarmming = {
  pro1:"java",
  pro2:"dbms",
  pro3:"html, sdd",
  pro4:"javascript"
}

console.log(progarmming, typeof progarmming);
console.log(progarmming.pro4);

//pro5 키값으로 value값은 git으로 추가
progarmming.pro5 = "git";
console.log(progarmming);

//pro3 삭제
delete progarmming.pro3;
console.log(progarmming);

// progarmming객체의 값을 하나씩 출력
// 자바의 빠른 for문
// for(자료형 변수명 : 컬렉션){
//  변수명
// }


for(let i in progarmming){
    console.log(i); //키값이 출력
    console.log(progarmming[i]); //value값 출력
}

//const는 재할당이 안되어야 하지만 객체에서는 내용이 바뀐다

// const num = 20;
// num = 20;
// console.log(num); 오류발생

//객체 내의 프로퍼티 정보를 변경
console.log(user); // { name: '정승환', age: 20, address: '수원시' }
user.name = "짱구";
console.log(user); 