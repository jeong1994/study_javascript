// window.onload = () => {
//   alert("로드 이벤트 발생");
// }

// window.addEventListener("load", ()=>{
//   alert("로드 이벤트!!!");
// });

let main = document.querySelector("main");
let color = main.style.backgroundColor;


window.addEventListener("scroll", () =>{
  let scrollY = window.scrollY;
  console.log(scrollY);
  if(scrollY > 400){
    main.style.backgroundColor = "gold";
  }else if (scrollY > 200){
    main.style.backgroundColor = "blue";
  }else if (scrollY > 100){
    main.style.backgroundColor = "yellow";
  }else{
    main.style.backgroundColor = color;
  }
});
