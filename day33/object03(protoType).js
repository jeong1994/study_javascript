//생성자 함수와 클래스

//프로토타입
//new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다************
//프로토타입은 함수로 선언하여 사용한다
//단 반드시 대문자로 시작해야 한다

function User(id, pw, name, age, subject){
  this.id = id;
  this.pw = pw;
  this.name = name;
  this.age = age;
  this.subject = subject; 
}

user1 = new User("abc", "1234", "짱구", 5, "javascript");
user2 = new User("def", "a123", "철수", 5, "javascript");

console.log(user1);
console.log(user2);

//클래스문법
// class User{
//   constructor(id, pw, name, age, subject){
//     this.id = id;
//     this.pw = pw;
//     this.name = name;
//     this.age = age;
//     this.subject = subject;    
//   }
// }

// const user1 = new User ("kkk", "1234", "정승환", 20, "javascript")
// const user2 = new User ("abccc", "123454", "도우너", 10, "javascript")