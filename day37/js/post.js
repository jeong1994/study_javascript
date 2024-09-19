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