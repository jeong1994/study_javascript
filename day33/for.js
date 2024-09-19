//for문

for(let i = 0; i < 3; i++){
  console.log('for문 반복 : ' + i);
}
for(let i = 0; i < 3; i++){
  console.log(`for문 반복 : ${i}`); //`이용하여 더 편하게 사용 가능 
}

// 0~10까지 2의 배수만 출력
for(let i = 0; i < 10; i++){
  if(i % 2 == 0){
    console.log(`2의 배수 : ${i}`);
  }
}

// 쌤답
for(let i = 0; i < 10; i+=2){
  console.log(`2의 배수 : ${i}`);
}