// 6번 : promise

const DB = [];

//사용자 정보를 받아서 저장하는 함수
function saveDB(user){
  const beforeLen = DB.length;
  console.log(beforeLen);
  const afterLen = DB.push(user);
  console.log(`저장  ${user.name}`);

  return new Promise((resolve, reject ) => {
    if(beforeLen < afterLen) {
      resolve(user);
    }else{
      reject(new Error("저장되지 않았습니다"));
    }
  });
  // saveDB({name : "김영선", email:"kkk@gmail.com"})
  // .then(user => console.log(`사용자정보 : ${user.name}`))
  // .catch(error => console.error(error.message));
}

//사용자 정보를 받아서 이메일 전송 메시지를 출력하는 함수
function sendEmail(user){
  console.log(`이메일 ${user.email} 전송`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

//사용자 정보를 받아서 사용자 이름을 포함한 정보를 반환하는 함수
function getResult(user){
  return new Promise((resolve) => {
    resolve(`방문자 ${user.name}`);
  });
}

function register(user){
  //Promise.all 메소드를 사용하여 여러 Promise를 동시에 실행하고 그 결과를 담은 Promise 객체 생성
  const resultAsync = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user),
  ]);

  resultAsync.then(console.log);
}

// register({
//   name : "짱구",
//   email:"gugu11@gmail.com",
// });

// 여러 사용자 정보 저장
const users = [{name : "짱구", email:"gu11@gmail.com"},
  {name : "철수", email:"chulsoo@gmail.com"},
  {name :"유리", email:"lee@gmail.com"}
];

users.forEach(register);


