// 13번
//https://jsonplaceholder.typicode.com/users 의 zip-code 값만 결과 출력하기
//지피티

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
      if (!response.ok) {
        throw new Error(`Response Error : ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      if (!users || users.length === 0) {
        throw new Error("None result");
      }
      
      const zipcodesList = document.getElementById("zipcodes-list");
      users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = user.address.zipcode;
        zipcodesList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
});


//----------------------------------------------------------쌤답
//1) fetch이용

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
  if(!response.ok){
    throw new Error(`response : ${response.status}`);
  }
  return response.json();
  
}).then((users) => {
  if(!users || users.length == 0){
    throw new Error(`none result`);
  }
  return users.map((user) => user.address.zipcode);
})
.then(console.log).catch((error) => console.log(error));

//2) await문법으로 바꾸기(함수명 : fetchZipcodes())
async function fetchZipcodes(){
  try{
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   if(!response.ok){
     throw new Error(`response : ${response.status}`);
   }
   const users = await response.json();
   if(!users || users.length == 0){
     throw new Error(`none result`);
   }
   const zipcodes = users.map((user) => user.address.zipcode);
   console.log(zipcodes);
  }catch(error){
   console.log(error);
  } 
 }
 
 fetchZipcodes();