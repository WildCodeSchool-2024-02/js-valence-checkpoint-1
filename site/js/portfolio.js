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
