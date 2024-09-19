let input1 = document.querySelector(".input-test1");
let input2 = document.querySelector('.input-test2');
console.log(input1);
let form = document.querySelector('form');

//해당 요소가 포커스되면 이벤트 발생(선택되면)
input1.addEventListener('focus', () =>{
  console.log("focus");
});

//blur 포커스를 잃으면 발생하는 이벤트
input1.addEventListener('blur', () =>{
  console.log("blur");
});

//keydown 키보드를 누르는 동안 계속 발생(키가 눌리면 입력과 상관없이 발생 컨트롤)
input2.addEventListener("keydown", ()=>{
  console.log("down");
});

//keypress 키보드를 누르는 순간(키보드로 무언가 입력되어야 발생)
input2.addEventListener("keypress", () => {
  console.log("press");
});

//keyup 키보드를 떼는 순간 발생
input2.addEventListener("keyup", () =>{
  console.log("keyup");
});

//change 요소의 상태가 변경되면 이벤트가 발생
input2.addEventListener("change", () => {
  console.log(input2.value);
});
// console.log(input2.value);

//submit 이벤트는 form 태그에 걸어준다
form.addEventListener('submit', ()=>{
  console.log('submit');
  alert("submit");

});

let colors = document.querySelectorAll('.color');
let foods = document.querySelectorAll('.food');

// console.log(colors);
console.log(foods);

for(let i = 0; i < colors.length; i++){
  colors[i].addEventListener('change', ()=>{
    console.log('change');
  });
}

//함수로 이벤트 부여하기
function radioEvent(element){
  element.addEventListener('CHANGE', () => {
    console.log("함수로 change 이벤트");
  });
}
// radioEvent(foods[0]);

for(let i = 0; i < foods.length; i++){
  radioEvent(foods[i]);
}