// 자바스크립트 객체와 JSON변환
// JSON은 자바스크립트 객체를 표현하는 문자열 형식, 서버와 클라이언트 간 데이터 교환에서 많이 사용된다
//JSON.stringify(객체명) : 자바스크립트의 객체를 json 문자열로 변환
//JSON.parse(json문자열) : JSON 문자열을 자바스크립트의 객체로 변환

user = {
  neme : "정승환",
  age : 20
};

console.log(user);

//JSON.parse() : json 타입을 js object로 변환
//JSON.parse(user); // js object는 json으로 판단하지 않기 때문에 오류
// JSON.parse(user); 오류발생

// userJSON = JSON.stringify(user);
// console.log(userJSON);


userJSON = '{"name" : "정승환", "age" : 20}';
user = JSON.parse(userJSON);
console.log(user);
console.log(user.name);