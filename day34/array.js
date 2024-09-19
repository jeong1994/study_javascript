//배열

let numbers = [10, 5, 3, 2, 7, 9];

console.log(numbers, typeof numbers);

//.push() : 가장 마지막에 값 추가
numbers.push(100);
console.log(numbers);
console.log(numbers[0], typeof numbers[0]);

for (let i in numbers) {
  console.log(i);   //인덱스만 추출
  console.log(numbers[i]);  //배열의 해당 인덱스 요소값 추출
}

//join() : 전달한 값으로 구분한 뒤 문자열로 리턴
console.log([1, 2, 3, 4, 5]);
console.log([1, 2, 3, 4, 5].join(", "), typeof [1, 2, 3, 4, 5].join(", "));

//slice(시작, 끝) : 원하는 부분을 추출하기 위해 시작 인덱스와 마지막 인텍스를 전달하면
//마지막 인덱스는 포함하지 않고 추출
let number2 = [1, 2, 3, 4, 5, 6, 7];
console.log(number2[0]); //인덱싱 : 하나의 요소만 추출하는 것
console.log(number2.slice(0, 3)); //슬라이싱 : 원하는 요소만 잘라내어 배열 형태로 추출
console.log(number2.slice(2, 5));
// 슬라이싱 할 때는 시작인덱스와 종료인덱스를 작성한다 (종료인덱스는 포함되지 않는다)

//pop() : 마지막 요소를 삭제
//shift() : 첫번째 요소를 삭제
console.log(number2);
console.log(number2.pop());
console.log(number2);
console.log(number2.shift());
console.log(number2);

//splice(인덱스번호, 갯수) : 해당 인덱스 삭제
//갯수만 입력하면 0번째 인덱스부터의 갯수로 인식하여 0 번째부터 n개 삭제가 된다
console.log(number2.splice(2, 1));
console.log(number2);

//3개의 매개변수가 들어가면 (인덱스, 개수, 교체할 값) 으로 인식
number2.splice(1, 1, 0);
console.log(number2);

//반복뭉 for each(callback)
numbers.forEach(function(element,index,array){
  console.log(element);
  console.log(index);
  console.log(array);
});

// indexOf(값) : 값을 array(기존배열)에서 찾은 뒤 인덱스 번호를 반환
// 값을 못찾으면 -1 반환
console.log(numbers.indexOf(100));

//fill(값) : 배열의 모든 요소를 해당 값으로 채우기
const number3 = new Array(5).fill(10);
console.log(number3);

//fill(값, 시작인덱스, 종료인덱스) : 시작인덱스~종료인덱스-1까지 해당 값으로 채우기
const number4 = new Array(10).fill(7, 1, 4); 
//10칸짜리 배열에 1부터 3번째 인덱스까지만 값을 7로 채운다
console.log(number4);

// console.log(numbers);
// //반복문 : forEach(callback)
// numbers.forEach(function (element, index, array){
//   // console.log(element);
//   // console.log(index);
//   console.log(array);
// });
