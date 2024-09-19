//promise

const promise = new Promise(function (resolve, reject){
  check = false;

  if(check){
    resolve("성공"); //이행되었을때
  }else{
    reject("실패"); //거부되었을때
  }
})

console.log(promise);
//Promise 객체는 출력되지 않는다
//비동기 작업의 결과를 다루는 객체이므로 객체 자체의 상태를 출력하는 것이 아닌
//Promise 객체가 나중에 이행되거나 거부되었을 때의 결과가 출력된다

//Promise 객체의 메소드
//then 메소드는 성공적으로 이행된 경우를 처리
//catch 메소드는 거부된 경우를 처리
//메소드 체이닝 : 자바스크립트에서 여러 메소드를 연이어 호출하는 기술
promise.then(console.log).catch(console.log);