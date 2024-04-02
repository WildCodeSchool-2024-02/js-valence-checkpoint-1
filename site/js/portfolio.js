document.addEventListener("DOMContentLoaded", function() {
    var avatarImage = document.querySelector('.first_banner img')
  avatarImage.addEventListener('click', function() {
    avatarImage.src = './image/avatar.svg'
    })
  })
  



// Etape 2
function changeName() {
    var newName = prompt("Enter your name:")
    if (newName !== null && newName !== "") {
      var firstnameSpan = document.getElementById('firstname')
      var paragraph = document.querySelector('.description p')
      var currentName = firstnameSpan.textContent
      firstnameSpan.textContent = newName
      paragraph.textContent = paragraph.textContent.replace(currentName, newName)
      firstnameSpan.style.color = 'white'
    }
  }
  
  
  
  
  