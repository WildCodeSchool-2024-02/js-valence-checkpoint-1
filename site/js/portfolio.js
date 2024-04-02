const avatarImage = document.getElementById("avatarImage")
const firstName = document.getElementById("firstname")
const addNewName = document.getElementById("addNewName")
const bgColor = document.getElementsByClassName("pink-bg")
const textColor= document.querySelectorAll("h4")
const links= document.querySelectorAll("a")
const listTools = document.querySelectorAll("ul.front-dev-tools > li")
avatarImage.addEventListener('click', function () {
        avatarImage.src = "./image/avatar-bis.png";
})

addNewName.addEventListener('click', function(){
    firstName.textContent = prompt('What your name ? ')
    firstName.style.color ="white"

    // NOT WORKING =  Uncaught TypeError: Cannot read properties of null (reading 'style')
    // FIXED = FORGOT ON " ON THE HTML ID ..... NO COMMENT
    let color = prompt('What color do you want  ? ')
    for( let i = 0; i < bgColor.length; i++ ) {
        bgColor[i].style.backgroundColor = color;
    }
    for( let i = 0; i < textColor.length; i++ ) {
        textColor[i].style.color = color;

}
})

addNewName.addEventListener('click', function(){
    let colorLink = prompt('What color do you want for the LINK  ? ')
    for( let i = 0; i< links.length; i++ ) {
        links[i].style.color = colorLink
    }
})

