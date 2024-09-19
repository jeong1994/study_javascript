//연산자1

//단항연산자
let num1 = 10;
let num2 = 20;
console.log(num1, num2, typeof(num1), typeof(num2));

//num1 전위형 증감연산자사용
num1 = ++num1;
console.log(num1, typeof(num1));
//num1 후위형 증감연산자사용
console.log(num2++, typeof(num2++));
console.log(num1, num2);

//이항연산자

//1) 산술연산자
num1 = 10;
// num2 = "2";
num2 = 2;
console.log(num1,  typeof(num1), num2, typeof(num2));
console.log("숫자 + 숫자 = " + num1+num2); //앞에서부터 문자열 + 숫자기 때문에 문자열로 나옴
console.log("숫자 - 숫자 = " + num1-num2); //NaN
console.log("숫자 + 숫자");
console.log(num1+num2);
console.log("숫자-숫자");
console.log(num1-num2);
console.log(10%3); // 나머지연산자

//복합대입연산자(누적할당연산자)
console.log(num2);
num2 += 20; //num2 = num2 + 20;
console.log(num2);

//쉬프트연산자
console.log(10<<2); // 40
console.log(10>>2); // 2

//관계연산자
//자바에서 문자열 비교는 equlse()메소드를 사용한다
//자바스크립트에서 문자열로 크기 비교를 할 때는 글자수로 비교한다
console.log("apple" > "pineapple"); //글자수 비교
console.log(1 == "1"); //값이 일치하는지 비교
console.log(1 === "1"); //값과 타입이 일치하는지 비교

//== : 값만 비교, 문자열일 경우 자동으로 파싱 "1" == 1 -> true
//=== : 값과 타입을 모두 비교 "1" === 1 -> false

//비교가 불가능한 undefined : undefined의 값은 다른 값과는 비교해서는 안된다
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false
console.log(undefined === 0); //false
console.log(undefined == null); //true 
console.log(undefined === null); //false 