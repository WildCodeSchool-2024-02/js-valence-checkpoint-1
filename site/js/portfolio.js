const avatar = document.querySelector("img[alt=avatar]")

avatar.addEventListener("click", function () {
  avatar.src = "image/avatar.svg"
})

const button = document.querySelector("button")
const firstName = document.querySelector("#firstname")
const pinkBg = document.querySelector(".pink-bg")
button.addEventListener("click", function () {
  const color = prompt("Enter color:")
  pinkBg.style.backgroundColor = color
  firstName.textContent = prompt("Enter your name:")
  firstName.style.color = "white"
})
