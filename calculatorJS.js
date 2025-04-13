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

let currentInput = "";

const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");

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
        if (button.value === "." && currentInput === "") {
            currentInput = "0.";
        } else {
            currentInput += button.value;
        }

        document.getElementById("display-text").textContent = currentInput;
        updateEqualsButtonState();
        checkForDecimal();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "") return;
        firstNumber = parseFloat(currentInput);
        operator = button.value;
        currentInput = "";
        document.getElementById("display-text").textContent = operator;
        updateEqualsButtonState();
        checkForDecimal();
    });
});

equalsButton.addEventListener("click", () => {
    console.log("Equals button clicked");
    if (firstNumber !== null && operator !== null && currentInput !== "") {
        console.log("Doing operation...");
        secondNumber = parseFloat(currentInput);

        let result = operate(operator, firstNumber, secondNumber);
        console.log("Result: ", result);

        currentInput = result.toString();

        firstNumber = null;
        operator = null;

        document.getElementById("display-text").textContent = currentInput;
        updateEqualsButtonState();
        checkForDecimal();
    }
});


//Bugs to watch out for:

    //answers w/ long decimals should be rounded to not overflow display

    //"clear" button shold wipe all existing data

    //ensure calculator only runs an operation when supplied w/ two numbers and an operator. 
        //if consecutive operators are pressed, calculator should not run any evaluations
    //when a result is displayed, pressing a new digit should clear the result and start new calculation - not append to existing result

//Extra credit
    //add a decimal button and let users input decimals
        //disable decimal button if already decimal separator in display
        

        
    //let users undo last input w/ backspace button
    // add keyboard support