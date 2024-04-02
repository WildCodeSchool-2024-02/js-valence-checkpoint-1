const avatarImg = document.querySelector(".section-container > img");
avatarImg.addEventListener("click", () => {
  avatarImg.src = "../site/image/avatar.svg";
});

const description = document.querySelector(".description");
const button = document.createElement("button");
button.innerHTML = "modify text and color";
description.appendChild(button);
button.addEventListener("click", () => {
  color = prompt("votre couleur");
  nom = prompt("Votre nom?");
  const firstname = document.querySelector("#firstname");
  firstname.innerHTML = nom;
  firstname.style.color = "white";
  const colorChange = document.querySelectorAll(".pink-bg");
  const textColorChange = document.querySelectorAll(".pink-text");
  const links = document.querySelectorAll("a");
  links.forEach((link) => (link.style.color = color));
  textColorChange.forEach((item) => (item.style.backgroundColor = color));
  colorChange.forEach((item) => (item.style.backgroundColor = color));
});

const ulskills = document.querySelector("#front-dev-tools");
const buttonChange = document.createElement("button");
buttonChange.innerHTML = "view my skills";
ulskills.appendChild(buttonChange);
buttonChange.addEventListener("click", () => {
  const firstLi = document.querySelector("#front-dev-tools li:nth-child(1)");
  firstLi.innerHTML = "github";
  const secondLi = document.querySelector("#front-dev-tools li:nth-child(2)");
  secondLi.innerHTML = "react JS";
  const thirdLi = document.querySelector("#front-dev-tools li:nth-child(3)");
  thirdLi.innerHTML = "CSS";
});

const backskills = document.querySelector(".backskills");
const formadd = document.createElement("form");
const inputadd = document.createElement("input");
const addbutton = document.createElement("button");
addbutton.innerHTML = "add";
formadd.appendChild(inputadd);
formadd.appendChild(addbutton);
backskills.appendChild(formadd);

formadd.addEventListener("submit", (e) => {
  e.preventDefault();
  const ulList = document.querySelector(".backskills ul");
  const addLi = document.createElement("li");
  addLi.innerHTML = inputadd.value;
  ulList.appendChild(addLi);
  inputadd.value = "";
});
