function hello(name){
  let data = `안녕하세요. ${name}님!`; //`(백틱)안에 문자열을 작성할 때 ${변수명}을 통해 편하게 사용 가능

  print(data);

}

function print(data){
  alert(`${data}`);
  // console.log(`${data}`);
}

// hello("정승환");