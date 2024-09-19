//비동기

function func1() {
  console.log("함수 1 실행");
  func2();
}
function func2() {
  setTimeout(function () {
    console.log("함수 2 실행");
  }, 1000); //1초 = 1000
  func3();
}
function func3() {
  setTimeout(() => {
    console.log("함수 3 실행");
  }, 500); //0.5초
}

func1();

//비동기 함수가 예약된 시간을 기준으로 실행되는 순서
//func1에서 함수1 실행 출력
//func2가 호출되면 setTimeout을 통해 1초 후에 실행될 콜백으로 예약되고 func3가 바로 호출
//func3는 setTimeout을 통해 0.5초 후에 실행될 콜백이 예약됨
//0.5초 후에 func3 콜백함수가 먼저 실행되어 함수3 실행이 출력됨
//그 후 1초 경과하면 func2 콜백함수가 실행되어 함수2 실행이 출력됨
