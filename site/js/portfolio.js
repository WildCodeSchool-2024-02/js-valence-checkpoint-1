const avatarImage = document.getElementById("avatarImage")
const firstName = document.getElementById("firstname")
const addNewName = document.getElementById("addNewName")
const bgColor = document.getElementsByClassName("pink-bg")
const textColor= document.querySelectorAll("h4")
avatarImage.addEventListener('click', function () {
        avatarImage.src = "./image/avatar-bis.png";
})

addNewName.addEventListener('click', function(){
    firstName.textContent = prompt('What your name ? ')
    firstName.style.color ="white"

    // NOT WORKING =  Uncaught TypeError: Cannot read properties of null (reading 'style')
    // FIXED = FORGOT ON " ON THE HTML ID ..... NO COMMENT

    for( let i = 0; i< bgColor.length && textColor.length; i++ ) {
        let allColor = prompt('What color do you want  ? ')
        bgColor[i].style.backgroundColor = allColor
        textColor[i].style.color = allColor
    }
})

