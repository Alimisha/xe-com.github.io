const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

let setUsername = "waqaskhan78430@gmail.com";
let setPassword = "8356536khan";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == setUsername && password.value == setPassword) {
    window.location.assign("load.html");
  } else {
    window.alert("Wrong username or password");
  }
});
