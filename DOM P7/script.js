// Task 1

const element = document.querySelectorAll(".main__languages a");
element.forEach((i) => {
    let text = i.innerText;
    if(text.includes('2.0')) { 
        i.style.display = "none";
    }
});

// Task 2

let myInputBox = document.querySelector(".main__form form input");
myInputBox.removeAttribute("disabled");

let myButton = document.querySelector(".main__form form button");
myButton.removeAttribute("disabled");
// location.reload();
myButton.addEventListener("click",(event) => {
    element.forEach((i) => {
        event.preventDefault();
        if(i.innerHTML.includes("2.0")){
            i.style.display = "inline";
        } 
   });
});