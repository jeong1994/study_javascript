//let 변수

var data = 10;
console.log(data);
var data = 20;
console.log(data); //동일한 이름으로 선언가능 (값이 변경됨)

console.log(data1); //var는 어디서 선언하던 값이 들어가지 않았다고 뜨지만
                  //let은 선언 후에만 접근이 가능하다. 에러발생
let data1 = `let 변수`;
console.log(data1);
data1 = '변수'; //동일한 이름으로 선언하여 값을 변경하려변 java에서 처럼 앞에let을 빼야 한다
console.log(data1);

//호이스팅은 자바스크립트에서 변수와 함수 선언을 코드의 최상단으로 끌어올리는 것을 의미한다
//코드를 실행하기 전에 변수, 함수 등의 선언이 메모리에 저장되기 때문에 가능하다

//var로 선언된 변수는 선언과 동시에 undefined로 초기화 되고 이후에 실제 값으로 할당된다
//따라서 var로 선언된 변수는 선언 전에도 접근 가능하며 undefined의 값을 가진다

//let과 const는 호이스팅 되지만 초기화 되지 않는다
//선언 전에 접근하려고 하면 참조 에러(ReferenceError)가 발생한다
//그 이유는 let, const는 선언이 코드의 실행 흐름에 도달했을 때 초기화 된다