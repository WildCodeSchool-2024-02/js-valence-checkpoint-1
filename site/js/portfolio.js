let logo = document.getElementById("logo");
let modify = document.getElementById("modify");
let fName = document.getElementById("firstname");
let description = document.querySelector(".description");


logo.addEventListener('click',() =>{
    logo.src="./image/avatar.svg";
})


modify.addEventListener('click',() =>{
    myColor = prompt("Enter your color");
    myName = prompt("Enter your name");

    fName.innerText=myName;
    fName.style.color = "#fff";
    description.style.backgroundColor = myColor;
})



