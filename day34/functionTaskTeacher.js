// 8번 : 함수 실습

let arr1 = [11, 42, 35, 27, 54, 10, 5, 19];

//1. 배열에서 홀수만 출력하는 함수 작성(일반함수)
//함수명 : oddArr
//arr1

console.log("===홀수만 출력 일반함수===");
function oddArr(arr){
  for(let i  = 0; i < arr.length; i ++){
    if(arr[i] % 2 !== 0){
      console.log(arr[i]);
    }
  }
}

oddArr(arr1);

//2. 배열의 모든 요소의 합을 계산하는 함수 작성(재귀함수, 화살표함수 각각 작성)
//함수명 : sumArr1
//함수명 : sumArr2
//arr1

console.log("===모든요소 합 재귀함수===");
function sumArr1(arr, num){ 
  //매개변수 arr : 합구할 배열, num : 고려할 배열의 요소 개수
  //종료조건 : num이 0이하가 되면 종료 0을 반환
  if(num <= 0){
    return 0;
  }
  return sumArr1(arr, num - 1) + arr[num - 1]; 
}

// let arr1 = [11, 42, 35, 27, 54, 10, 5, 19];
console.log(sumArr1(arr1, arr1.length));

console.log("===모든요소 합 화살표함수===");
const sumArr2 = (arr) => arr.reduce((acc, current) => acc + current, 0);
console.log(sumArr2(arr1));

//3. 배열 요소 중 가장 큰 값과 가장 작은 값을 찾는 함수 작성(익명함수, 즉시실행함수 각각 작성)
//함수명 : arrMaxMin1
//함수명 : arrMaxMin2
//arr1

console.log("===최댓값 최솟값 익명함수===");
let arrMaxMin1 = function (arr){
  let max = arr[0];
  let min = arr[0];
  for(let i = 1; i < arr.length; i++){
    // if(arr[i] > max){
      //   max = arr[i];
    // }
    // if(arr[i] < min){
      //   min = arr[i];
      // }
      max = (arr[i] > max) ? arr[i] : max;
      min = (arr[i] < min) ? arr[i] : min;
    }
    // return [max, min];
    return `max : ${max}, min : ${min}`;
  };
  
  console.log(arrMaxMin1(arr1));
  
  console.log("===최댓값 최솟값 즉시실행 함수===");
  (function(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
      max = (arr[i] > max) ? arr[i] : max;
      min = (arr[i] < min) ? arr[i] : min;
    }
    console.log(`max : ${max}, min : ${min}`);
  })([1, 2, 3, 4, 5]);

  //4. 배열의 요소를 역순으로 정렬하는 함수 작성(일반함수, 콜백함수)
  //함수명 : reverseArr

  console.log("===배열 요소 역순정렬 일반 함수===");
  function reverse(arr){
    let reArr = [];
    for(let i = arr.length - 1; 0 <= i; i--){
      reArr.push(arr[i]);
    }
    return reArr;
  }
  console.log(arr1);
  console.log(reverse(arr1));
  
  console.log("===배열 요소 역순정렬 콜백 함수===");
  function reverseArr2(arr, callback){
    for(let i = 0; i < arr.length / 2; i++){
      callback(arr, i, arr.length - i - 1);
    }
    return arr;
  }
  
  function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  console.log(reverseArr2(arr1, swap));
  
  //5. 사람의 정보(이름, 나이, 성별, 학생여부-true, false)를 담은 객체2개 생성 후
  // 배열에 추가후 출력하기
  // 메소드 이용
  console.log("===사람의 정보(이름, 나이, 성별, 학생여부-true, false)를 담은 객체2개 생성 후 배열에 추가 메소드 이용===");
  let person = [];

  let person1 = {
    name: "짱구",
    age: 15,
    gender: "m",
    isStu: true
  };
  let person2 = {
    name: "유리",
    age: 20,
    gender: "w",
    isStu: false
  };

  person.push(person1, person2)

  console.log(person);

  
  //6. 객체에서 이름과 학생여부를 출력하는 함수 작성
  // 함수명 : printStu
  function printStu(person){
    console.log(`이름 : ${person.name}, 학생여부 : ${person.isStu}`);
  }

  printStu(person1);
  printStu(person2);
  printStu(person);

//7. 객체의 속성을 반복하면서 모든 속성과 모든 값을 출력하는 함수 작성
// 함수명 : printStuInfo
// console.log(person);
function printStuInfo(person){
  //1. 객체의 키만 배열에 담기
  const keys = [];
  for(let key in person){
    keys.push(key);
  }
  
  //2. 수집한 키를 이용해서 값 출력
  for(let i = 0; i < keys.length; i++){
    console.log(`${keys[i]} : ${person[keys[i]]}`)
  }
}

//각 객체의 모든 속성 출력
printStuInfo(person1);
printStuInfo(person2);
printStuInfo(person);

for(let i = 0; i < person.length; i++){
  printStuInfo(person[i]);
}
