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
  textColorChange.forEach((item) => (item.style.backgroundColor = color));
  colorChange.forEach((item) => (item.style.backgroundColor = color));
});
