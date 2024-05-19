const avatar = document.querySelector("img[alt=avatar-bis]");
avatar.addEventListener("click", function () {
  avatar.src = "image/avatar.svg";
});

const button = document.querySelector(".change-name");
let givenName = document.getElementById("firstname");
/*let box = document.querySelector(".pink-bg");*/
let root = document.querySelector(":root");
button.addEventListener("click", function () {
  givenName.textContent = prompt("Give me a name?");
  givenName.style.color = "white";
  /*box.style.backgroundColor = prompt("Give me a color code?");*/
  root.style.setProperty("--lightWildColor", prompt("Give me a color code?"));
});

const buttonDevTools = document.querySelector(".modify-dev-tools");
const ulDevTools = document.getElementById("front-dev-tools");
const items = document.querySelectorAll("#front-dev-tools li");

buttonDevTools.addEventListener("click", function () {
  /*
  for (let i = 0; i < 2; i++) {
    items[0].textContent = "VsCode";
    items[1].textContent = "Github";
    items[2].textContent = "Terminal";
  }
  */

  ulDevTools.innerHTML = "";
  [("VsCode", "Github", "Terminal")].forEach(function (text) {
    const li = document.createElement("li");
    li.textContent = text;
    ulDevTools.appendChild(li);
  });
});
