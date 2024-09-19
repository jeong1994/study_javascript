//11번
fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
  if(!response.ok) {
    throw new Error(`Response Error : ${response.status}`);
    //상태코드가 200이면 성공, 200이 아니면 에러를 발생
  }
  //json 형식으로 변환된 응답 데이터 반환
  return response.json();
}).then((posts) => {
  if(!posts || posts.length === 0){
    throw new Error(`None Result`);    
  }
  //받아온 데이터가 있다면 첫번째 포스트의 id와 title 정보를 반환
  const post = posts[0];
  return { id : post.id, title : post.title};
}).then(console.log).catch((error) => {
  console.log(error.message);
});