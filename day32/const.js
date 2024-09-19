//const로 선언한 변수는 상수이다
//값을 변경할 수 없다

// console.log(typeof data); //역시 let과 동일하게 선언전 접근이 불가능하다 호이스팅은 되지만 값이 초기화 되지 않기 때문
                        //var는 호이스팅과 동시에 undefinded로 초기화 되기 때문에 가능
const data = 10;
console.log(data);
console.log(typeof data);

// data = 20; //스크립트 창에서는 오류가 발생하지 않지만 상수로 선언했기 때문에 재할당시
console.log(typeof data); //실행시켜보면 에러가 발생한다