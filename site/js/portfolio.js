const avatarImg = document.querySelector(".first-banner img");
avatarImg.addEventListener("click", function(event){
    console.log(avatarImg)
    if(avatarImg.src === "image/avatar-bis.png") {
        avatarImg.src = "image/avatar.svg"
    } else {
        avatarImg.src = "image/avatar-bis.png"
    }
})