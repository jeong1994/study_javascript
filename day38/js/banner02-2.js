let $slideBox = $(".slide-box");
let $slideImgs = $(".slide-img");
console.log($slideImgs);

//슬라이드 박스 너비
let slideWidth = 800;
//슬라이드 이미지 인덱스 번호
let currentIdx = 0;
//총 슬라이드 이미지 수
let slideCnt = $slideImgs.length;
console.log(slideCnt);

let slideInterval;

//자동 슬라이드 시작함수
function startSlide(){
  slideInterval = setInterval(function() {
    //다음 슬라이드로 이동하는 함수 호출
    moveNext();
  }, 2000);
}

startSlide();

//자동 슬라이드 중지 함수
function stopSlide(){
  clearInterval(slideInterval);
}

//다음 슬라이드로 이동하는 함수
function moveNext(){
  currentIdx++;
  //마지막 슬라이드에 도달하면 맨 첫번째 슬라이드로 이동
  if(currentIdx >= slideCnt){
    currentIdx = 0;
  }
  $slideBox.css("left", -(currentIdx * slideWidth)+"px");
  $slideBox.css("transition", "0.5s ease");
  //이전 다음 버튼 감추고 보이게하는 함수 호출
  checkEnd();
}

//이전 슬라이드로 이동하는 함수
function movePrev(){
  currentIdx--;
  $slideBox.css("left", -(currentIdx * slideWidth) +"px");
  $slideBox.css("transition", "0.5s ease");
  checkEnd();
}

//이전, 다음 버튼 클릭 이벤트에 자동 슬라이드 중지와
//재시작함수 연결
$(".next").on("click", function(){
  moveNext();
  stopSlide(); //다음 버튼 클릭시 자동 슬라이드 중지
  startSlide();
});

$(".prev").on("click", function(){
  movePrev();
  stopSlide();
  startSlide();
});

//슬라이드 박스에 마우스 호버시 자동 슬라이드 중지
$slideBox.parent().on("mouseenter", stopSlide);

//슬라이드 박스에서 마우스가 떨어지면 자동 슬라이드 다시시작
$slideBox.parent().on("mouseleave", startSlide);

function checkEnd(){
  $(".prev").css("display", currentIdx <= 0 ? "none" : "block");
  $(".next").css("display", currentIdx >= slideCnt - 1 ? "none" : "block");
  // if(currentIdx <= 0){
  //   $(".prev").css("display", "none");
  // }else{
  //   $(".prev").css("display", "block");
  // }

  // if(currentIdx >= slideCnt - 1){
  //   $(".next").css("display", "none");
  // }else{
  //   $(".next").css("display", "block");
  // }
}

checkEnd();