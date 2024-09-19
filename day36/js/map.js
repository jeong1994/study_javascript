//map

const numbers = [1,2,3,4,5];

//배열의 각 요소에 대해 2를 곱하는 함수를 만들고 호출한 뒤 새로운 배열을 생성
const double = numbers.map((number)=>{
  return number * 2
})

console.log(numbers);
console.log(double);

//Map 생성
const map = new Map();

//요소 추가
map.set('name', '짱구');
map.set('age', 20);
map.set('subject', 'javascript');

console.log(map);

//특정키에 해당하는 값 가져오기
console.log(map.get('name'));

//특정 키가 있는지 확인
console.log(map.has('subject'));
console.log(map.has('job'));

//특정 키와 해당 값 제거
console.log(map.delete('subject'));
console.log(map);
console.log(map.delete('subject'));
console.log(map);

//모든 키 출력
for(let key of map.keys()){
  console.log(key);
}

//모든 값 출력
for(let value of map.values()){
  console.log(value);
}

//모든 키와 값 쌍 출력
for(let [key, value] of map.entries()){
  // console.log(item);
  console.log(key, value);
}

//요소 길이 출력
console.log(map.size);