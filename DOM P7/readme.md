# **DOM Assignment 06**
>**Note**: To complete all the given task.

## **Initial Output**

![](./initialOutput.png)

## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## **Task 1**

To remove the languages that have 2.0 in their name(Every alternative language).

### **After Update**

![](./ass7.1-after.png)

### **Project Solution**

```
const element = document.querySelectorAll(".main__languages a");
element.forEach((i) => {
    let text = i.innerText;
    if(text.includes('2.0')) { 
        i.style.display = "none";
    }
});
```

---

## **Task 2**

To use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

### **After Update**

![](./ass7.2-output.png)

### **Project Solution**

```
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
```

---