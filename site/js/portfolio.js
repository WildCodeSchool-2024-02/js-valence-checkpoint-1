const avatar = document.querySelector("img[alt=avatar]")

avatar.addEventListener("click", function () {
  avatar.src = "image/avatar.svg"
})

const button = document.querySelector("button")
const firstName = document.querySelector("#firstname")
const pinkBg = document.querySelectorAll(".pink-bg")
const pinkText = document.querySelectorAll(".pink-text")
button.addEventListener("click", function () {
  const color = prompt("Enter color:")
  pinkBg.forEach((el) => (el.style.backgroundColor = color))
  pinkText.forEach((el) => (el.style.color = color))

  firstName.textContent = prompt("Enter your name:")
  firstName.style.color = "white"
})
