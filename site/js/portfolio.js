const btn = document.querySelector(".btn");
const firstname = document.querySelector("#firstname");
const modifie = document.querySelector("modifie");
const mouvimage = document.querySelector("#ima");
const changBackground = document.querySelector(".pink-bg ");
const changText = document.querySelectorAll("h4");
const changButton = document.querySelector(".btn");

modifie = btn.addEventListener("click", () => {
  const nom = prompt("entre ton prénom");
  mouvimage.src = "/site/image/avatar.svg";
  changBackground.style.backgroundColor = " #750ff7 ";
  changButton.style.backgroundColor = "#750ff7";
  firstname.innerText = nom;
  firstname.style.color = "#fff";
  changText.style.color = "#750ff7";
});
function modifie2() {}
