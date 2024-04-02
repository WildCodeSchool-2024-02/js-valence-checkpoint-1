const avatar = document.querySelector("img[alt=avatar]")

avatar.addEventListener("click", function () {
  avatar.src = "image/avatar.svg"
})

const button = document.querySelector("button")
const firstName = document.querySelector("#firstname")

button.addEventListener("click", function () {
  firstName.textContent = prompt("Enter your name:")
  firstName.style.color = "white"
})
