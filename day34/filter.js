// filter
// const newArray = 배열명.filter(callback(element[, index[, array]][, thisArg]));

//1부터 10까지 요소중 짝수 요소만 필터링

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter(function (element) {
  return element % 2 === 0;
});

console.log(even);

//짝수 인덱스의 요소 출력
const evenIdx = numbers.filter(function (element, index) {
  return index % 2 === 0;
});

console.log(evenIdx);


//배열의 첫번째 요소보다 튼 요소만 필트링
const number = [5, 2, 6, 8];
const newArr1 = number.filter(function (element, index, array) {
  return element > array[0];
});

console.log(newArr1);

//배열의 값이 5보다 큰 요소들만 새로운 배열로 만들기
console.log(numbers);

const newArr2 = numbers.filter(function (element) {
  return element > 5;
})

console.log(newArr2);

//배열의 짝수 요소를 2배로 만든 새로운 배열 생성(filter,map 둘 다 사용)
//1.짝수요소만 필터링 배열 생성
const evenVal = numbers.filter(function (element) {
  return element % 2 === 0;
});
console.log(evenVal);

//2.필터링된 배열의 요소를 *2 배열 생성
const newArr3 = evenVal.map(function(element){
  return element * 2;
});

console.log(newArr3);

//홀수요소만 필터링하고 인덱스와 함께 출력하기
//1. 각 요소와 인덱스를 객체로 반환
const arrIdx = numbers.map(function(element, index){
  return {element:element, index:index};
});

console.log(arrIdx);

//2. 홀수요소만 필터링
const odd = arrIdx.filter(function(obj){
  return obj.element % 2 === 0;
});
console.log(odd);