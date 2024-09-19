//set

let set = new Set();
console.log(set);

let gu1 = {name : "KIA"};
let gu2 = {name : "LG"};
let gu3 = {name : "삼성"};
let gu4 = {name : "SSG"};

//set에 객체 추가
set.add(gu1);
set.add(gu2);
set.add(gu3);
set.add(gu4);
console.log(set);

for(let gu of set){
  console.log(gu.name);
}

let ar1 = ['사과','오렌지','배','귤','사과','사과'];
console.log(ar1);

let set1 = new Set(ar1);
console.log(set1);

//Set 객체 set1의 각 요소에 대해 콜백함수를 실행하고
//요소의 값, 값과 동일한 키, Set객체 자체 출력
set1.forEach((value, key, set) => {
  console.log(value);
  console.log(key);
  console.log(set);
});