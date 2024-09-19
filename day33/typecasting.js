//변수 만들때 var, let
//상수 만들때 const

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

let str1 = "12";
console.log(str1, typeof str1);
let str2 = "2";
console.log(str2, typeof(str2));

console.log(str1+str2, typeof(str1+str2)); //문자열+문자열 = 문자열 연결
console.log(str1-str2, typeof(str1-str2)); //숫자값의 문자열타입 - 숫자값의 문자열타입 = 숫자타입 연산
console.log(str1*str2, typeof(str1*str2));
console.log(str1/str2, typeof(str1/str2));

let str3 = "가";
console.log(str3, typeof str3);
let str4 = "나";
console.log(str4, typeof(str4));
console.log(str3 + str4, typeof(str3+str4)); //문자열끼리의 합은 연결연산
console.log(str3 - str4, typeof(str3-str4)); //가-나는 연산이 불가하기 때문에 값은 NaN, 타입은 number
console.log(str3 * str4, typeof(str3*str4)); //* / 도  -와 마찬가지
console.log(str3 / str4, typeof(str3/str4));