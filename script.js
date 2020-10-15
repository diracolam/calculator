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

// Query Selectors-------------------------------------------------------
//-----------------------------------------------------------------------

const memDisplay = document.querySelector("#memory");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

// Event Listeners/Other Functions---------------------------------------
//-----------------------------------------------------------------------

const update = function(button) {
    updateExpression(button.value);
};

const updateExpression = function(buttonValue) {
    if (currentExpression === "") {
        if (buttonValue !== "+" && buttonValue !== "-" && buttonValue !== "*" && buttonValue !== "/") {
            currentExpression += buttonValue;
            memDisplay.textContent = currentExpression;
        }
    } else if (currentExpression) {
        let lastInput = currentExpression.charAt(currentExpression.length - 1);
        if (lastInput !== "+" && lastInput !== "-" && lastInput !== "*" && lastInput !== "/") {
            currentExpression += buttonValue;
            memDisplay.textContent = currentExpression;
        }
    }
};

numberButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)})
});

operatorButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {update(currentButton)});
});