const avatar = document.querySelector(".banner img");
const desc = document.querySelector(".description");
const firstName = document.querySelector("#firstname");


avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar.svg"
})


function createButton(text, bg) {
    const newBtn = document.createElement("button");
    newBtn.textContent = text;
    newBtn.style.padding = "1rem";
    newBtn.style.color = "#fff";
    newBtn.style.backgroundColor = bg;
    newBtn.style.border = "1px solid #fff";
    newBtn.style.borderRadius = "5px";
    return newBtn;
}


function handleDescBtn() {
    const modifyBtn = createButton("Modify text and color", "transparent");
    desc.appendChild(modifyBtn);

    modifyBtn.addEventListener('click', () => {
        let newColor = String(prompt("Enter your color: "));
        let newName = String(prompt("Enter your name: "));
        const pinkBg = document.querySelectorAll('.pink-bg');
        const pinkText = document.querySelectorAll('.pink-text');
        const links = document.querySelectorAll('a')
        
        console.log(pinkBg, pinkText);
        if(newColor) {
            pinkBg.forEach(el => el.style.backgroundColor = newColor);
            pinkText.forEach(el => el.style.color = newColor);
            links.forEach(link => link.style.color = newColor);
        }

        if(newName) {
            firstName.innerText = newName;
            firstName.style.color = "#fff";
        }
    })
}

handleDescBtn();

function modifyToolList(arr) {
    const toolListItems = document.querySelectorAll('#front-dev-tools li');

    for(let i = 0; i < arr.length; i++) {
        toolListItems[i].innerText = arr[i];
    }
}

function modifyDevTools() {
    const frontEnd = document.querySelector(".skills section:last-of-type");

    const modifyBtn = createButton("Modify", "pink");
    modifyBtn.style.border = "none";
    modifyBtn.classList.add("pink-bg");
    frontEnd.appendChild(modifyBtn);

    modifyBtn.addEventListener('click', () => {
        modifyToolList(["vsCode", "github", "terminal"])
    })
}

modifyDevTools();

function addDevTools() {
    const backEnd = document.querySelector(".skills section:first-of-type");
    const devToolsList = document.querySelector(".skills section:first-of-type ul");
    
    const inputContainer = document.createElement('div');
    const input = document.createElement('input');
    const submit = createButton("Add", "pink");
    submit.style.padding = "0.5rem";
    submit.classList.add('pink-bg');

    inputContainer.append(input, submit);
    inputContainer.style.display ="flex";
    inputContainer.style.flexDirection ="row";
    inputContainer.style.justifyContent ="center";
    backEnd.append(inputContainer);

    submit.addEventListener("click", () => {
        if(input) {
            let newItem = document.createElement('li');
            newItem.innerText = input.value;
            devToolsList.appendChild(newItem);
            input.value = "";
        }
    })
}

addDevTools();