//map()
// let newArray = 기존배열명.map(callback(element[, index[, array]][,this Arg]));

//배열의 각 요소에 2를 곱한 값을 새로운 배열로 반환
const arr1 = [1, 2, 3, 4, 5];
const newArr1 = arr1.map(function (element) {
  return element * 2;
});

console.log(arr1);
console.log(newArr1);

//배열의 각 요소를 문자열의 길이를 새로운 배열로 반환
const arr2 = ['java', 'javascript', 'dbms', 'web'];
const newArr2 = arr2.map(function (element) {
  return element.length;
});

console.log(arr2);
console.log(newArr2);

// 배열의 각 객체의 특정 프로퍼티 값을 새로운 배열로 반환
const users = [
  { name: "짱구", age: 5 },
  { name: "철수", age: 5 },
  { name: "훈이", age: 5 },
  { name: "맹구", age: 5 }
];

console.log(users);

const names = users.map(function (element) {
  return element.name;;
});

console.log(names);

//배열의 각 요소에 인덱스를 추가하여 새로운 배열로 반환
const number = [1, 2, 3, 4, 5];
const numberIdx = number.map(function (element, index) {
  // return [element, index];
  return { element: element, index: index };
});

console.log(numberIdx);


const numberIdx2 = number.map(function (element, index, array) {
  return {
    element: element,
    index: index,
    originArray: array
  };
});

console.log(numberIdx2);


//thisArg는 콜백함수 내에서 this 키워드를 사용할 때 참조할 객체를 지정할 수 있다
const mul = { multi: 2 };

const numberIdx3 = number.map(function(element,index,array){
  return{
    element : element * this.multi,
    // mul객체가 thisArg로 전달되어 콜백함수 내에서는
    // this 키워드를 통해 mul객체를 참조할 수 있다
    index : index,
    originArray : array
  };
}, mul);

console.log(numberIdx3);