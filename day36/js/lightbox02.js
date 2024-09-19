let testBtn = document.querySelectorAll(".img-box > button");
let bigImgWrap = document.getElementsByClassName("big-img-wrap");

// console.log(testBtn);
// console.log(bigImgWrap);

for(let i = 0; i < testBtn.length; i++){
  testBtn[i].addEventListener("click", function(){
    bigImgWrap[0].style.display = "flex";

    // data-src 속성을 활용
    let src = this.getAttribute("data-src");
    // console.log(src);

    let bigImg = document.querySelector(".big-img");
    bigImg.setAttribute("src", src);
  });

  bigImgWrap[0].addEventListener("click", function(){
    this.style.display = "none";
  });
}
