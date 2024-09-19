//HTML 요소를 id로 가져오기
let title = document.getElementById('title');
console.log(title);

//HTML 요소를 class로 가져오기
let item = document.getElementsByClassName('item');
console.log(item);
//class로 요소를 가져오면 여러 요소가 선택되므로 배열과 유사한 형태로 가져오게 된다

//가져온 요소에서 특정 요소만 사용하고 싶다면 인덱싱을 사용한다
console.log(item[0]);

//querySelector를 사용하면 좀 더 자유롭게 선택자를 사용하여 요소를 가져올 수 있다
let bgGreen = document.querySelector('#bg-green');
console.log(bgGreen);

//querySelectorAll을 사용하면 여러 요소를 가져온다
let odd = document.querySelectorAll('.odd');
console.log(odd);

//innerText를 사용하면 요소의 내용만 가져온다
console.log(title.innerText);