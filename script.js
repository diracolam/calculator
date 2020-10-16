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

const update = function(button) {
    const buttonValue = button.value; 
    const lastInput = currentExpression.charAt(currentExpression.length - 1);

    if (lastInput === "=") {
        currentExpression = "";
    }
    
    if (operatorArray.includes(buttonValue)) {
        if (!operatorArray.includes(lastInput) && lastInput !== "=" && currentExpression !== "") {
            currentExpression += buttonValue;
            memDisplay.textContent = currentExpression;
        } else if (operatorArray.includes(lastInput)) {
            currentExpression = currentExpression.slice(0, -1) + buttonValue;
            memDisplay.textContent = currentExpression;
        }
    } else if (buttonValue === "=") {
        if (operatorArray.includes(lastInput)) {
            currentExpression = currentExpression.slice(0, -1) + "=";
            memDisplay.textContent = currentExpression;
        } else if (lastInput !== "=" && currentExpression !== "") {
            currentExpression += buttonValue;
            memDisplay.textContent = currentExpression;
        }

    } else {
        currentExpression += buttonValue;
        memDisplay.textContent = currentExpression;
    }
};

numberButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)})
});

operatorButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)});
});

equalsButton.addEventListener("click", function() {update(equalsButton)});