//break문, continue문

for(let i = 0; i < 5; i++){
  if(i == 3){ // 값만비교 하기 때문에 3에 ""를 씌우면 ===사용해야 정상작동
    break;
  }
  console.log(`${i+1}번째 반복 : ${i}`);
}

for(let i = 0; i < 5; i++){
  if(i == 3){
    continue;
  }
  console.log(`${i+1}번째 continue : ${i}`);
}