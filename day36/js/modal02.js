let modal = document.querySelector(".modal-box");
// console.log(modal);

function openModal(){
  modal.setAttribute('display',() => {
    modal.style.display = "flex";
  });
}

function closeModal(){
  modal.setAttribute('display',() => {
    modal.style.display = "none";
  });
}

//////////////////////////////////////////////////////////
function openModal(){
  document.querySelector('.modal-box').style.display="flex";
}
function closeModal(){
  document.querySelector('.modal-box').style.display="none";
}