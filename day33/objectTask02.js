//15번 : json과 자바스크립트 객체 실습

//상품명과 가격을 json으로 만들고 json을 Object 객체로 변환한 뒤 각각의 프로퍼티를 출력한다
//json으로 변환한 뒤 출력한다

//1) 상품명과 가격을 포함하는 JSON 문자열 생성
let productJSON = '{"name": "컴퓨터", "price" : 1500000}'; //
console.log(productJSON);

//2) JSON 문자열을 자바스크립트 객체로 변환
let product = JSON.parse(productJSON);
console.log(product);
//3) 변환된 객체의 각 프로퍼티 출력
console.log("상품명 : " + product.name);
console.log("가격 : " + product.price);

//4) 자바스크립트 객체를 JSON 문자열로 변환
let newJSON = JSON.stringify(product);

//5) 변환된 JSON 출력
console.log(newJSON);