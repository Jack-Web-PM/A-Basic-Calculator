// document.querySelector("html").addEventListener("click", () => {
//     alert("this is wrong")
// });
    
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let input = document.querySelector("input");

function inputNumber() {
    const number = prompt("please input some numbers.");
    localStorage.setItem("1", number);
    myHeading.textContent = '1, ${number}';
}

function inputText () {
    
}