//함수 실습
let arr1 = [11, 42, 35, 27, 54, 10, 5, 19];

//1. 배열에서 홀수만 출력하는 함수 작성(일반함수)
//함수명 : addArr
//arr1
console.log(arr1);

function addArr(arr) {
  for (let i in arr) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
}

addArr(arr1);
console.log("================");

//2. 배열의 모든 요소의 합을 계산하는 함수 작성(재귀함수, 화살표함수 각각)
//함수명 : sumArr1
//함수명 : sumArr2
//arr1

//재귀함수

//화살표함수
let sumArr2 = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArr2(arr1));
console.log("================");


//3. 배열 요소중 가장 큰 값과 가장 작은 값을 찾는 함수 작성(익명함수, 즉시실행함수 각각)
//함수명 : arrMaxMin1
//함수명 : arrMaxMin2
//arr1

//익명함수
let arrMaxMin1 = function (arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    max < arr[i] ? max = arr[i] : max = max;
    min > arr[i] ? min = arr[i] : min = min;
  }
  return [max, min];
}

console.log(arrMaxMin1(arr1));
console.log("================");

//즉시실행함수
(function (arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    max < arr[i] ? max = arr[i] : max = max;
    min > arr[i] ? min = arr[i] : min = min;
  }
  console.log(`max : ${max}, min : ${min}`);
})(arr1);

console.log("================");

//4. 배열의 요소를 역순으로 정렬하는 함수 작성(일반함수, 콜백함수)
//함수명 : reverseArr

//5. 사람의 정보 (이름, 나이, 성별, 학생여부-true, false)를 담은 객체 2개 생성후
//배열에 추가 후 출력
//메소드 이용
let person1 = {
  name: "짱구",
  age: 15,
  gender: "m",
  isStu: true
};
let person2 = {
  name: "승환",
  age: 20,
  gender: "m",
  isStu: false
};

let personInfo = new Array();

personInfo.push(person1);
personInfo.push(person2);

console.log(personInfo);

(function(arr){
  for(let info in arr){
    console.log(info.name);
  }
})(personInfo);

//6. 객체에서 이름과 학생여부를 출력하는 함수 작성
//함수명 : printStu

//7. 객체의 속성을 반복하면서 모든 속성과 모든 값을 출력하는 함수 작성
//함수명 printStuInfo

