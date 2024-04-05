const btn = document.createElement("button");
const firstname = document.querySelector("#firstname");
const modifie = document.querySelector("modifie");
const mouvimage = document.querySelector("#ima");
const changBackground = document.querySelector(".pink-bg ");
mouvimage.addEventListener("click", function () {
  mouvimage.src = "/site/image/avatar-bis.png";
});

modifie = firstname.addEventListener("click", () => {
  const nom = prompt("entre ton prénom");
  changBackground.style.backgroundColor = "black";
  firstname.innerText = nom;

  firstname.style.color = "#fff";
});
