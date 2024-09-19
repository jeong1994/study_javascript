//var 변수명 = 값;
var data = `10`;
console.log(data);
console.log(typeof data);

//동적바인딩 : 컴파일 시 값에 따라 자료형이 동적으로 결정된다

console.log(data2);
var data2 = 10;
console.log(data2);
//hoisting(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당된다
//초기화 작업은 호이스팅 되지 않고 선언만 호이스팅 된다

console.log(data3);
var data3;
data3 = 100;
console.log(data3);

var data4 = "값 수정 금지";
//var를 사용하여 변수를 선언한다(오래된 javascript 버전에서 사용된다
//let, const를 사용하는 것이 권장된다(변수의 스코프와 호이스팅 동작)
console.log(data4);
console.log(typeof data4);
data4 = `안녕`;
console.log(data4);
console.log(typeof data4);
