let $box2 = $('.box2');
// console.log($box2);

// let $boxes = $('.div-box');
// console.log($boxes);

// $boxes.css('background-color', 'red'); 

// console.log($box2.parent()); //부모인 main요소가 선택됨
// console.log($box2.parents()); //조상인 main, body, html 요소가 선택됨
// console.log($box2.prev()); //box1이 선택됨
// console.log($box2.nextAll()); //동생인 box3, box4, ul, li 선택됨
// console.log($box2.nextAll()[1]); // 인덱스 번호로 box4만 선택

// //클래스 이름으로 가져온 모든 요소 중 2번째 인덱스 요소를 가져오기
// console.log($(`.div-box`));
// //jquery 객체에서 한개를 가져오기 위해 접근하면 무조건 js객체로 변한다
// console.log($('.div-box').eq(2));

// //1. li 태그 전체 가져오기
// let $lists = $('li');
// console.log($lists);

// //2. 클래스 이름이 product인 태그 전체 가져오기
// let $products = $('.product');
// console.log($products);

// //3. 자식 태그 중 첫번째 자식 가져오기
// let $firstPro = $('.product li').first();
// console.log($firstPro);
// console.log($firstPro.text()); //내용만 가져오기

// // //4. ul 태그의 부모태그 가져오기
// // console.log($('ul').parent());

// // //5. li 태그의 부모태그 가져오기
// // console.log($('li').parent());

// // //6. ul 태그 자식 중에서 0번째 인덱스 가져오기
// console.log($('ul').children().eq(0).text());

// // //7. ul 태그 자식 중에서 2번째 인덱스 가져오기
// // console.log($('ul').children().eq(2));

// // 요소를 조작하는 메소드
// $box2.html("<h1>html</h1>");
// // $box2.css("color", "white");

// $('.box1').text('text');
// $('.box3').css('background-color', 'skyblue');

// let $input = $('input[type=text]');
// console.log($input.attr('placeholder'));

// $input.removeAttr('placeholder');

// $('.box4').removeClass('div-box');

// console.log($box2.prop('style'));

// $box2.prop('style').backgroundColor = 'pink';

// $input.on('change', () => {
//   console.log($input.val());
// });

// 이벤트 메소드
$('.box1').on('click', function () {
  // console.log(this); //this는 jquery 요소가 아니다
  // this.style.backgroundColor = 'red';
  //만약 jquery로 사용하고 싶으면 this를 jquery로 감싸주면된다
  $(this).css('background-color', 'pink');
});

$('.box3').on('click', (e) => {
  // this.style.backgroundColor = "green";
  // console.log(this);

  //jquery로 이벤트 처리할 때 this를 사용하면 이벤트 걸린요소가 아닌 window 객체가 선택된다
  //이런 경우 매개변수를 활용하면 해당 이벤트 객체를 가져올 수 있다
  console.log(e);
  //이벤트 객체에서 제공하는 프로퍼티 중 currentTarget 또는 target을 사용하면
  //이벤트가 걸린 요소 자체를 가져올 수 있다
  console.log(e.currentTarget);
  //currentTarget은 현재 이벤트가 걸린 요소만 의미한다. 즉, this와 같다
  //target은 이벤트가 걸린 요소의 자식까지 영향을 줄 수 있다
  //자식을 클릭해도 현재 요소의 이벤트를 발생시키려면 target을 사용하면 된다

  //currentTarget의 결과를 확인해보면 jquery 객체가 아닌 일반 요소이다
  e.currentTarget.style.backgroundColor = "black";
  
  //만약 jquery를 사용하고 싶다면 가져온 요소를 다시 jquery로 감싸주면 된다
  $(e.currentTarget).css('background-color', 'pink');

});