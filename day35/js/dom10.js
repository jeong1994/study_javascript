globalThis.Number = 0;
function createDIV(){

  //랜덤한 배경색을 지정할 색상 배열
  const colors = new Array("yellow", "red", "blue", "green", "pink");
  console.log(colors);

  //Math.floor(Math.random() * n) : 0 ~ n-1 사이의 랜덤값생성
  //랜덤한 색상을 선택
  const randomIdx = Math.floor(Math.random() * colors.length);
  console.log(randomIdx);
  const randomColor = colors[randomIdx];
  console.log(randomColor);

  //새로운 div요소 생성
  const newDiv = document.createElement("div");
  //div 요소에 내용과 스타일 추가
  newDiv.innerText = `새로 생성된 div ${globalThis.Number++} 입니다`
  newDiv.style.backgroundColor = randomColor;

  //생성된 div를 wrap요소에 추가
  document.getElementById("wrap").appendChild(newDiv);

  //생성된 div를 클릭하면 삭제되도록 이벤트 핸들러 설정
  newDiv.onclick = function(){
    this.parentElement.removeChild(this);
  };
}

createDIV();
