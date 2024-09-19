

// async function getName(){
//   return "짱구"; //비동기 함수로 짱구라는 문자열 반환
// }

// async function printName(){
//   const name = await getName(); //getName함수를 호출하고 해당 함수가 완료가 완료될 때까지 기다린 후
//   console.log(name); //받은 결과를 콘솔에 출력
// }

// printName();

//----------------------------------------------------
async function getData(){
  //2초후 데이터 반환하는 비동기 함수
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve(`데이터 로드 완료`);
    }, 2000);
  });
}

async function printData(){
  const data = await getData();
  console.log(data);
}

printData();