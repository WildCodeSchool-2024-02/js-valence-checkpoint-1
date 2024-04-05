const btn = document.createElement("button");
const firstname = document.querySelector("#firstname");
const modifie = document.querySelector("modifie");
const mouvimage = document.querySelector("#ima");

mouvimage.addEventListener("click", function () {
  mouvimage.src = "/site/image/avatar-bis.png";
});

modifie = firstname.addEventListener("click", () => {
  const nom = prompt("entre ton prénom");
  firstname.innerText = nom;
  firstname.style.color = "#fff";
});
