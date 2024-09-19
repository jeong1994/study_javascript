const input = document.querySelector("input[type='button']");
console.log(input);
const p = document.querySelector("p");

input.addEventListener("click", function(){
  with (p.style){
    fontSize = "30px";
    border = "3px solid magenta";
    width="100px";
    backgroundColor="pink";
  }
});