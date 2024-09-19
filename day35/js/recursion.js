//재귀함수
//x를 n번 곱해주는 함수

//1) for문
function pow1(x, n){
    let result = 1;
    for(let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

console.log(pow1(3,2));
console.log(pow1(2,4));

//2) 재귀함수
function pow2(x,n){
  //종료조건
  if(n === 1){
    return x;
  } else {
    return x * pow2(x, n-1);
  }
}

console.log(pow2(2,4));

//pow2(2,4) = 2 * pow2(2,3)
//pow2(2,3) = 2 * pow2(2,2)
//pow2(2,2) = 2 * pow2(2,1)
//pow2(2,1) = 2

//객체 이용한 재귀
//학생 정보를 객체에 추가하기
let student = {
  stu:[
    {name:"짱구", age : 10, java : 60, js : 80},
    {name:"철수", age : 10, java : 77, js : 91},
  ],
};

console.log(student.stu);

//for문 프로퍼티의 값 추출
// for(let 변수명 in 배열명){} => 이렇게 in키워드로 출력하면 인덱스로 나와서 인덱스값을 다뤄서 출력해야함
for(const st of student.stu){ // => of 키워드를 사용하면 그냥 출력해도 요소를 뽑아냄
  console.log(`이름 : ${st.name}, 나이 : ${st.age}, java점수 : ${st.java}, js점수 : ${st.js}`);
}

console.log(student.stu.length);
//학생들의 점수 총합 계산하는 함수
function total(student, index=0){
  //재귀함수 종료조건
  if(index >= student.length){
    return {};
  }

  //현재 학생정보 가져오기
  const currentStu = student[index];

  //현재 학생은 java, js 점수 합산
  const totalScore = currentStu.java + currentStu.js;

  //현재 정보 업데이트
  const updateStu = {
    [currentStu.name] : {...currentStu, totalScore},
  };

  //재귀함수를 호출하여 다음 학생 정보를 처리하고 누적한 결과에 반환
  const stuResult = total(student, index + 1);

  return {
    ...updateStu,
    ...stuResult,
  };
}

//재귀함수 호출하여 모든 학생 정보를 계산하고 업데이트 된 정보를 얻을 수 있다
const resultStudent = total(student.stu);
console.log(resultStudent);