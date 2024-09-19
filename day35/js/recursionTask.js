//리스트 내의 항목을 하나씩 출력하는 함수

let list = {
  value:1,
  next:{value:2, next :{value:3, next:{value:4, next:null}}},
};

console.log(list);
console.log(list.value);
console.log(list.next.value);
console.log(list.next.next.value);
console.log(list.next.next.next.value);

//재귀함수 이용 1,2,3,4
function printlist(list){
  if(list){
    console.log(list.value);
    printlist(list.next);
  }
}