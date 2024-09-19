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

checkEnd();

$(".next").on("click", function () {
  console.log("다음 클릭");
  currentIdx++;
  console.log("+idx : " + currentIdx);
  $slideBox.css("left", -(currentIdx * slideWidth));
  $slideBox.css("transition", "0.5s ease");
  checkEnd();
});

$(".prev").on("click", function(){
  console.log("이전 클릭");
  currentIdx--;
  console.log("-idx : " + currentIdx);
  $slideBox.css("left", -(currentIdx * slideWidth));
  $slideBox.css("trasition", "0.5s ease");
  checkEnd();
});


function checkEnd(){
  if(currentIdx <= 0){
    $(".prev").css("display", "none");
  }else{
    $(".prev").css("display", "block");
  }

  if(currentIdx >= slideCnt - 1){
    $(".next").css("display", "none");
  }else{
    $(".next").css("display", "block");
  }
}