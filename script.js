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

// Query Selectors-------------------------------------------------------
//-----------------------------------------------------------------------

const memDisplay = document.querySelector("#memory");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

// Event Listeners/Other Functions---------------------------------------
//-----------------------------------------------------------------------

const displayNumber = function(button) {
    if (display.textContent === "0") {
        display.textContent = button.value;
    } else {
        display.textContent += button.value;
    }  
};

numberButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {displayNumber(currentButton)})
});

operatorButtons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {getOperator(currentButton)});
});
