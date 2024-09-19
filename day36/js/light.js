function lightOn(){
  const image = document.getElementById('image1');
  image.src="../img/light_on.png";
}

function lightOff(){
  const image = document.getElementById('image1');
  image.src="../img/light_off.png";
}

function changeImage(){
  const image = document.getElementById('image1');
  if(image.src.includes('../img/light_off.png')){
    lightOn();
  }else{
    lightOff();
  }
}