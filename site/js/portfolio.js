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
  let nom = document.getElementById("firstname");
  nom.innerHTML = nom.innerHTML.replace(/Matt/g, "Kaled");
  nom.style.color = "white";
}
