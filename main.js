let firstNumber; //first number
let secondNumber; //second number
let step = 0;
let operation;
let result = 0;
let finishedCalculation = false;

let numArray = [];
let secondNumArray = [];
let display = document.getElementById('display');

function getNumber(num) {
  if (finishedCalculation) {
    resetCalculaton();
  }
  if (step <= 1) {
    numArray.push(num); //Everytime add in number can be push
    firstNumber = Number(numArray.join(''));//merge into one string
    display.value = firstNumber;
    step = 1;
  } else {
    secondNumArray.push(num); //second number add can be push
    secondNumber = Number(secondNumArray.join(''));
    display.value = secondNumber;
  }
}

function getOperator(operator) { 
  if (step != 1 || operation) {
    console.log("You can't change you operator for now.")
    return;
  }
  step = 2;
  operation = operator;
}

function resetCalculaton() {
  finishedCalculation = false;
  display.value = "";
  firstNumber = null;
  secondNumber = null;
  step = 0;
  operation = null;
  result = 0;
  numArray = [];
  secondNumArray = [];
}

const calculateEquals = () => { //first number with second input that does not a number will return
  if (!firstNumber && !secondNumber) {
    display.value = "Invalid input";
    return;
  }
  if (operation === '+') { //operation +
    result = firstNumber + secondNumber;
    display.value = result;
  } else if (operation === '-') { //operation -
    result = firstNumber - secondNumber;
    display.value = result;
  } else if (operation === '*') { //operation *
    result = firstNumber * secondNumber;
    display.value = result;
  } else if (operation === '/') { //operation /
    result = firstNumber / secondNumber;
    display.value = result;
  }
  finishedCalculation = true;
}