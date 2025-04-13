const add = function(a, b) {
    return a + b;
};
const subtract = function(a, b) {
    return a - b;
};
const multiply = function(a, b) {
    return a * b;
};
const divide = function(a, b) {
    return a / b;
};

let firstNumber = null;
let secondNumber = null;
let operator = null;

const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");

let currentInput = "";

let justCalculated = "false";

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return b !== 0 ? divide(a, b) : "Error";
        default:
            return "Error";
    }
}

function updateEqualsButtonState() {
    if (firstNumber !== null && operator !== null && currentInput !== "") {
        equalsButton.disabled = false;
    } else {
        equalsButton.disabled = true;
    }
}

function checkForDecimal() {
    if (currentInput.includes(".")) {
        decimalButton.disabled = true;
    } else {
        decimalButton.disabled = false;
    }
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (justCalculated) {
            currentInput = "";
            justCalculated = false;
        }

        if (currentInput.length >= 11) return;

        currentInput += button.value;
        
        document.getElementById("display-text").textContent = currentInput;

        updateEqualsButtonState();
        checkForDecimal();
    });
});

decimalButton.addEventListener("clcik", () => {
    if (justCalculated) {
        currentInput = "0.";
        justCalculated = false;
    }
    if (!currentInput.includes(".")) {
        currentInput += ".";
        document.getElementById("display-text").textContent = currentInput;
    }

    updateEqualsButtonState();
    checkForDecimal();
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput !== "") {
            firstNumber = parseFloat(currentInput);
            operator = button.value;
            currentInput = "";
        } else if (firstNumber !== null && operator === null) {
            operator = button.value;
        }
        document.getElementById("display-text").textContent = operator;

        updateEqualsButtonState();
        checkForDecimal();
    });
});

equalsButton.addEventListener("click", () => {
    console.log("Equals button clicked");
    if (firstNumber !== null && operator !== null && currentInput !== "") {
        console.log("Doing operation...");
        const display = document.getElementById("display-text");
        secondNumber = parseFloat(currentInput);

        let result = operate(operator, firstNumber, secondNumber);
        console.log("Result: ", result);

        if (result === "Error") {
            display.classList.add("error");
            currentInput = "Error";
        } else {
            display.classList.remove("error");

            let resultString = result.toString();

            if (resultString.length > 11) {
                if (resultString.includes(".")) {
                    const [intPart, decimalPart] = resultString.split(".");
                    const allowedDecimalLength = 11 - intPart.length - 1;

                    if (allowedDecimalLength > 0) {
                        result = parseFloat(result).toFixed(allowedDecimalLength);
                    } else {
                        result = parseFloat(result).toExponential(5);
                    }
                } else {
                    result = parseFloat(result).toExponential(5);
                }

                resultString = result.toString();
            }

            currentInput = resultString;
        }

       display.textContent = currentInput;

        firstNumber = null;
        operator = null;
        justCalculated = true;

        updateEqualsButtonState();
        checkForDecimal();
    }
});

clearButton.addEventListener("click", () => {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    currentInput = "";

    document.getElementById("display-text").textContent = "0";
    document.getElementById("display-text").classList.remove("error");

    updateEqualsButtonState();
    checkForDecimal();
});

backspaceButton.addEventListener("click", () => {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
       document.getElementById("display-text").textContent = currentInput || "0"; 
    }
    else if (operator !== null) {
        operator = null;
        document.getElementById("display-text").textContent = firstNumber !== null ? firstNumber.toString() : "0";
    }
    
    updateEqualsButtonState();
    checkForDecimal();
});

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        const button = document.querySelector(`button[value="${key}"]`);
        if (button) button.click();
    }

    if (["+", "-", "*", "/"].includes(key)) {
        const button = document.querySelector(`button[value="${key}"]`);
        if (button) button.click();
    }

    if (key === "Enter" || key === "=") {
        equalsButton.click();
    }

    if (key === "Backspace") {
        const backspaceButton = document.getElementById("backspace");
        if (backspaceButton) backspaceButton.click();
    }

    if (key === "Escape" || key.toLowerCase() === "c") {
        const clearButton = document.getElementById("clear");
        if (clearButton) clearButton.click();
    }
    
});