//배열

//배열 리터럴 [] 대괄호 사용하여 배열 생성
let arr = [];
console.log(arr, typeof arr);


// 배열 내부의 데이터 타입이 달라도 배열 생성 가능
arr[0] = 10;
arr[1] = "hello";
arr[2] = 20;

console.log(arr, typeof arr);

// 초기값 할당
let arr2 = [1, 2, 3];
console.log(arr2, typeof arr2);
console.log(arr2.length);

// 배열 크기 지정 배열 생성
let arr3 = [,,,];
console.log(arr3.length);

//Array() 생성자 함수로 배열 생성
let arr4 = new Array(); // 빈배열 생성
arr4[0] = "사과";
arr4[1] = "바나나";
arr4[2] = "체리";
console.log(arr4, arr4.length);

//Array() 생성자 함수로 초기값 할당
let arr5 = new Array('첫번째', 1, true);
console.log(arr5, typeof arr5);

for(let i = 0; i < arr5.length; i++){
  console.log(arr5[i]);
}