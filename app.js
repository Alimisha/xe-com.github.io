const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

let setUsername = "Laritraders0";
let setPassword = "9771131101";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == setUsername && password.value == setPassword) {
    window.location.assign("load.html");
  } else {
    window.alert("Wrong username or password");
  }
});
