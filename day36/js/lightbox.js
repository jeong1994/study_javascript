let testImg = document.getElementsByClassName("test-img");
let bigImgWrap = document.getElementsByClassName("big-img-wrap");

// 모든 이미지요소에 클릭이벤트를 주기 위해 반복문 사용
for(let i = 0; i < testImg.length; i++){
  // console.log(testImg);
  // console.log(testImg[i]);
  testImg[i].addEventListener("click", function(){
    let src= this.getAttribute("src");
    // console.log(src); //경로
    // console.log("this"); //img 태그 전체
  
    let bigImg = document.querySelector(".big-img");
    bigImg.setAttribute("src", src);
    // console.log(bigImgWrap);

    bigImgWrap[0].style.display="flex";
    bigImgWrap[0].addEventListener("click", function(){
      this.style.display = "none";
    })
  });
}