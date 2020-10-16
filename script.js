// Math Functions--------------------------------------------------------
//-----------------------------------------------------------------------
const add = function(a, b) {
    return parseInt(a) + parseInt(b);
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
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let equalSign = "";
let output = "";
const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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

const updateNumbers = function(number) {
    if (firstNumber === "") {
        firstNumber = number;
    } else if (currentOperator === "") {
        firstNumber += number;
    } else {
        secondNumber += number;
    }
};

const updateDisplay = function() {
    if (output !== "") {
        display.textContent = output;
    } else if (secondNumber !== "") {
        display.textContent = secondNumber;
    } else {
        display.textContent= firstNumber;
    }
};

const updateExpression = function() {
    currentExpression = firstNumber + currentOperator + secondNumber + equalSign;
    memDisplay.textContent = currentExpression;
};

const update = function(button) {
    if (numberArray.includes(button.value)) {
        updateNumbers(button.value);
    }
    if (operatorArray.includes(button.value) && currentOperator === "") {
        currentOperator = button.value;
    }
    if (button.value === "=") {
        equalSign = "=";
        output = operate(currentOperator, firstNumber, secondNumber);
    }

    updateDisplay();
    updateExpression();  
};

numberButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)})
});

operatorButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)});
});

equalsButton.addEventListener("click", function() {update(equalsButton)});