// //배열과 함수 실습

// // 주어진 요소를 출력하는 콜백함수
// // 콜백함수일 때는 매개변수 callback으로 작성

// //[1,2,3,4,5] 주어진 요소를 출력하는 콜백함수
// function printArr(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// //숫자출력 익명함수
// let printNum = function (number) {
//   console.log(number)
// }

// //홀수출력 익명함수
// let oddNum = function (number) {
//   if (number % 2 === 1) {
//     console.log(number);
//   }
// }

// let arr = [1, 2, 3, 4, 5];

// printArr(arr, printNum);
// printArr(arr, oddNum);

// //[1,2,3,4,5,6,7,8,9,10]의 배열에서 짝수 요소만 출력하는 콜백함수
// let evenNum = function (number) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// }

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// printArr(arr2, evenNum);

// //[2,4,6,8]배열의 각 요소에 10을 더해 출력하는 콜백함수
// let arr3 = [2, 4, 6, 8];

// let plusTenNum = function (number) {
//   console.log(number + 10);
// }

// printArr(arr3, plusTenNum);

// //문자열의 길이를 출력하는 콜백함수

// //[3,5,2,6,1]배열 숫자 중 최대값을 구하여 출력하는 콜백함수
// let arr4 = [3, 5, 2, 6, 1];

// let maxNum = function (number) {
//   let max = 0;
//   if(number > max){
//     max = number;
//   }
//   return max;
// }

// printArr(arr4. maxNum);

// //[1,2,3,4,5] 배열의 평균 구하는 콜백함수


//쌤 답
// 1. [1, 2, 3, 4, 5] 주어진 요소를 출력하는 콜백함수

function printArr(arr, callback) { //배열과 함수를 매개변수로 받아
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]); //반복문을 돌며 매개변수로 받은 배열의 각 방의 요소들을 콜백함수의 매개변수로 넣어서 실행
  }
}

let printNum = function (number) { //매개변수로 받은 숫자를 
  console.log(number); //콘솔에 출력
};

//홀수만 구하는 익명함수 정의
let oddNum = function (number) {
  if (number % 2 === 1) { //매개변수로 받은 값이 홀수면 출력
    console.log(number);
  }
};

let arr1 = [1, 2, 3, 4, 5];

// printArr(arr1, printNum);
// printArr(arr1, oddNum);

// 2. [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]의 배열에서 짝수요소만 출력하는 콜백함수

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNum(arr2, callback) {
  for (let i = 0; i < arr2.length; i++) {
    callback(arr2[i]);
  }
}

let printEven = function (number) {
  if (number % 2 === 0) {
    console.log(number);
  }
};
// console.log("------2번------");
// evenNum(arr2, printEven);

// 3. [2, 4, 6, 8] 배열의 각 요소에 10을 더해 출력하는 콜백함수
let arr3 = [2, 4, 6, 8];

function printTen(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

let addTen = function (number) {
  console.log(number + 10);
};
console.log("3번");
printTen(arr3, addTen);

// 4. [java, javascript, dbms, web]문자열의 길이를 출력하는 콜백함수
let arr4 = ["java", "javascript", "dbms", "web"];

function printlength(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

let printStr = function (stringLen) {
  console.log(stringLen.length);
};
console.log("4번");
printlength(arr4, printStr);

// 5. [3, 5, 2, 6, 1]배열 숫자 중 최대값을 구하여 출력하는 콜백함수
let arr5 = [33, 55, 22, 16, 11];

function arrMax(arr, callback) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = callback(max, arr[i]);
  }
  console.log(max);
}

let maxCall = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};
console.log("5번");
arrMax(arr5, maxCall);

// 6. [1, 2, 3, 4, 5] 배열의 평균 구하는 콜백함수
let arr6 = [1, 2, 3, 4, 5];

function arrAvg(arr, callback) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  callback(sum, arr.length);
}

let avg = function (sum, length) {
  console.log(sum);
  console.log(sum / length);
};
console.log("6번");
arrAvg(arr6, avg);





















