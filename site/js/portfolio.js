const avatar = document.getElementById("avatar");
avatar.addEventListener("click", function () {
  const currentImage = this.getAttribute("src");
  let newImage;
  if (currentImage === "image/avatar1.jpg") {
    newImage = "image/avatar.svg";
  } else {
    newImage = "image/avatar.svg";
  }
  this.setAttribute("src", newImage);
});
function nomTextColor() {
  let newText = prompt("Veuillez saisir le texte à remplacer Matt par :");
  if (newText !== null) {
    let nom = document.getElementById("firstname");
    nom.innerHTML = nom.innerHTML.replace(/Matt/g, newText);
    nom.style.color = "white";
  }
  let newColor = prompt("Veuillez saisir la couleur  #750ff7 :");
  if (newColor !== null) {
    let pinkSections = document.querySelectorAll(".pink-bg");
    pinkSections.forEach(function (section) {
      section.style.backgroundColor = newColor;
    });
  }
}
