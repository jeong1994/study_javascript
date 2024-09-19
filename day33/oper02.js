//연산자2
//자바와 동일

// 논리연산자
console.log(true || true); //t
console.log(true || false); //t
console.log(false || true); //t
console.log(false || false); //f

console.log(true && true); //t
console.log(true && false); //f
console.log(false && true); //f
console.log(false && false); //f

console.log(10 < 5 || 10 > 5); //t
console.log(10 < 5 && 10 > 5); //f
console.log(!(10 < 5)); //t

// && : 선행 조건식이 false면 뒤로 넘어가지 않고 선행조건식이 true면 뒤에 있는 값으로 대체된다

let check = false;
console.log(check && 10);
check = true;
console.log(check && 10); // true false가 아닌 10이 나옴. 앞이 참이면 무조건 뒤의 값으로 대체

// "", null, 0, undefined : false로 취급되는 값
let data;
console.log(data, typeof data);
if(data){
  console.log("true");
}else{
  console.log("false");
}

data = data || 1;
console.log(data, typeof(data)); // &&연산에선 앞이 true여야 뒤의값을 가져오지만 ||연산은 앞이 false여도 뒤에 값이 있거나 true면 뒤의값 출력
console.log(data || 1); //뒤에 빈값이 아닌 제대로 된 값이 들어오면 true로 인식


// 삼항연산자
//조건식 ? 참 : 거짓
check = false;
console.log(check ? 10 : 20);
console.log(true ? `참` : `거짓`);
console.log(false ? `참` : `거짓`);


