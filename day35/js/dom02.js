let boxClick = document.querySelector("#click");
let boxOver = document.querySelector("#over");
let boxOut = document.querySelector("#out");
let boxOverOut = document.querySelector("#over-out");

console.log(boxClick);

function chanceBgBlue(){
  // boxClick.setAttribute('style', "background-color:blue");
  console.log(this);
  // this는 자기자신을 의미한다
  //현재 이벤트가 걸린 요소의 스타일을 바꾸고 싶다면 이벤트가 걸린 this를 사용하면된다
  this.setAttribute("style", "background-color:skyblue");
}

function chanceBgRed(){
  this.setAttribute("style", "background-color:red");
}

boxClick.addEventListener("click", chanceBgBlue);
boxOverOut.addEventListener("mouseover", chanceBgRed);
boxOverOut.addEventListener("mouseout", chanceBgBlue);

boxOver.addEventListener("mouseover", function(){
  boxOver.setAttribute("style", "background-color:pink");
})