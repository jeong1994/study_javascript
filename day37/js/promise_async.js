// 8번

const DB = [];

function saveDB(user){
  // setTimeout(callback, deley);
  setTimeout(() => {
    const beforeLen = DB.length;
    const afterLen = DB.push(user);
    
    return new Promise((resolve, reject) => {
      if (beforeLen < afterLen){
        resolve(user);
        console.log(`${user.name}의 정보가 저장되었습니다`);
      }else{
        reject(new Error("저장되지 않았습니다"));
      }
    }, 3000); 
  });
}

//사용자 정보를 받아서 이메일 전송 메시지 출력
function sendEmail(user){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
      console.log(`이메일 ${user.email} 전송`);
    }, 5000);
  });
}

//사용자 정보를 받아서 정보반환
function getResult(user){
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(`방문자 $user.name}`);
      console.log("방문자 실행");
    }, 500);
  });
}

function register(user){
  const result = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user),
  ]);

  result.then(console.log);
}


register({
  name : "둘리",
  email : "lee11@gmail.com",
});