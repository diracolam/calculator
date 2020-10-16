// Math Functions--------------------------------------------------------
//-----------------------------------------------------------------------
const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

// Global Variables------------------------------------------------------
//-----------------------------------------------------------------------

let currentExpression = "";
let firstNumber = "0";
let secondNumber = "0";
let currentOperator = "";
const operatorArray = ["+", "-", "*", "/"];

// Query Selectors-------------------------------------------------------
//-----------------------------------------------------------------------

const memDisplay = document.querySelector("#memory");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalsButton = document.querySelector("#equals");

// Event Listeners/Other Functions---------------------------------------
//-----------------------------------------------------------------------



numberButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)})
});

operatorButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)});
});

equalsButton.addEventListener("click", function() {update(equalsButton)});