//전체동의 완성하기
NodeList.prototype.map = Array.prototype.map;

const all = document.querySelector("input.all");
const terms = document.querySelectorAll("input.term");
console.log(all);
console.log(terms);

//전체 동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
all.addEventListener("click", () => {
  terms.forEach((term) => {
    term.checked = all.checked;
  });
});

//약관동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
terms.forEach((term) => {
  //약관동의 체크박스를 나타내는 NodeList에 대해 forEach 메소드를 호출
  term.addEventListener("click", (e) => {
    //현재 반복중인 약관동의 체크박스에 대해 클릭 이벤트리스너를 추가함

    //전체동의 체크박스 상태 변경
    //terms.map((rerm) => term.checked) : 약관동의 체크박스들의 checked 속성값을 배열로 매핑
    //filter((checked) => checked) : checked 가 true인 요소만 걸러냄
    //length === 3; : 체크박스에 선택된 개수가 3개인지 확인
    all.checked = terms.map((rerm) => term.checked).filter((checked) => checked).length === 3;
  });
});

//전체동의 완성하기

// NodeList.prototype.map = Array.prototype.map;

// const all = document.querySelector("input.all");
// const terms = document.querySelectorAll("input.term");
// console.log(all);
// console.log(terms);

// //전체 동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
// all.addEventListener("click", () => {
//   terms.forEach((term) => {
//     term.checked = all.checked;
//   });
// });

// //약관동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
//  terms.forEach((term) => {
//   //약관동의 체크박스를 나타내는 NodeList에 대해 forEach 메소드를 호출
//   term.addEventListener("click", (e) => {
//     //현재 반복중인 약관 동의 체크박스에 대해 클릭 이벤트 리스너를 추가함
//     all.checked = terms.map((term) => term.checked).filter((checked) => checked).length === 3;
//     //전체동의 체크박스 상태 변경
//     //terms.map((term) => term.checked) : 약관동의 체크박스들의 checked 속성값을 배열로 매핑
//     //filter((checked) => checked) : checked 가 true인 요소만 걸러냄
//     //length === 3; : 체크박스에 선택된 개수가 3개인지 확인
//   }); 
//  });