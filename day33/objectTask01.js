// 객체 실습
// 세명의 직원 정보를 객체로 선언
// 이름 : 둘리, 나이 : 19, salary:3000
// 이름 : 도우너, 나이 : 23, salary:5300
// 이름 : 또치, 나이 : 27, salary:3500

// 회사 객체를 생성하고
// 직원마다의 연봉출력하기
// 직원 이름 : 이름, 연봉 : 000만원 형태로 출력
const imployee1 = {
  name : "둘리",
  age : 19,
  salary : 3000
}
const imployee2 = {
  name : "도우너",
  age : 23,
  salary : 5300
}
const imployee3 = {
  name : "또치",
  age : 17,
  salary : 3500
}

const company = {
  imployee1,
  imployee2,
  imployee3
}

// console.log(`직원 이름 : ${company.i1.name}, 연봉 : ${company.i1.salary}`);
// console.log(`직원 이름 : ${company.i2.name}, 연봉 : ${company.i2.salary}`);
// console.log(`직원 이름 : ${company.i3.name}, 연봉 : ${company.i3.salary}`);

for(let key in company){
  console.log(key);
  console.log(company[key]);
  console.log(`이름 : ${company[key].name}, 연봉 : ${company[key].salary}`)
}

for(let i of Object.values(company)){ //Object.values(객체명) = 객체의값을 배열로 반환
  console.log(i.name);
}