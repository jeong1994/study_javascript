// 주문처리 시스템
//주문을 저장, 확인 이메일 전송, 주문확인 메시지 반환

const orders = [];

//주문 정보 받아서 저장하는 함수 saveOrder
function saveOrder(order){
  const beforeLen = orders.length;
  const afterLen = orders.push(order);
  console.log(`주문 저장 : ${order.product}`);

  //Promise객체 생성해서 반환
  return new Promise((resolve, reject) => {
    if(beforeLen < afterLen){
      resolve(order);
    }else{
      reject(new Error("주문이 저장되지 않았습니다"));
    }
  });
}

//주문정보를 받아서 이메일 전송 메시지 출력 sendOrderEmail
function sendOrderEmail(order){
  console.log(`이메일 전송 : ${order.email}`);
  //Promise 객체 생성해서 반환
  return new Promise((resolve) => {resolve(order);});
}

//주문정보를 받아서 주문 확인 메시지 반환
function getOrderResult(order){
  return new Promise((resolve) => {
    resolve(`주문자 : ${order.name}, 상품 : ${order.product}`);
  });
}

//Promise.all 메소드를 사용하여 여러 Promise를 동시에 실행하고 결과 담은 객체 생성
//proOrder
function proOrder(order){
  const result = Promise.all([
    saveOrder(order),
    sendOrderEmail(order),
    getOrderResult(order),
  ]);
  
  result.then(console.log);
}

proOrder({
  name : "홍길동",
  email : "hong11@gmail.com",
  product : "노트북",
  price : 1500000
});
