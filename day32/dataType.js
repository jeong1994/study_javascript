//데이터 타입
//실행 단축키 ctrl alt n

//number
console.log(3.15, typeof 3.15);
console.log(10, typeof 10); // 띄어 쓰기도 가능하고

//boolean
console.log(true, typeof(true)); // 자바의 메소드처럼 사용도 가능
console.log(false, typeof(false));

//String
console.log("hello", typeof("hello"));
console.log('hi', typeof('hello'));
console.log(`안녕`, typeof(`안녕`));

//undefined
console.log(undefined,typeof undefined);

let value = `1`; //변수에 타입을 지정하지 않아도 되고
console.log(value, typeof(value)); //저장한 값에 따라 타입이 다르게 출력.
//값을 넣지 않아도 나온다

//null
console.log(null, typeof null, typeof(null));
let value1 = null;
console.log(value1, typeof(value1));

//object
let obj = {name:"정승환"};
console.log(obj, typeof obj);

