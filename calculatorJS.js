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

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.value;
        document.getElementById("display-text").textContent = currentInput;
    });
});

const operatorButtons = document.querySelectorAll(".operator-button");

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "") return;
        firstNumber = parseFloat(currentInput);
        operator = button.value;
        currentInput = "";
        document.getElementById("display-text").textContent = operator;
    });
});

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

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
    if (firstNumber !== null && operator !== null && currentInput !== "") {
        secondNumber = parseFloat(currentInput);

        let result = operate(operator, firstNumber, secondNumber);

        currentInput = result.toString();

        firstNumber = null;
        operator = null;

        document.getElementById("display-text").textContent = currentInput;
    }
});


//Bugs to watch out for:
    //calculator should not evaluate more than a single pair of numbers at a time.
    //answers w/ long decimals should be rounded to not overflow display
    //pressing = before all of the required numbers or operator
    //"clear" button shold wipe all existing data
    //return error msg if user tries to divide by 0. don't let it crash calculator
    //ensure calculator only runs an operation when supplied w/ two numbers and an operator. 
        //if consecutive operators are pressed, calculator should not run any evaluations
    //when a result is displayed, pressing a new digit should clear the result and start new calculation - not append to existing result

//Extra credit
    //add a decimal button and let users input decimals
        //disable decimal button if already decimal separator in display
    //let users undo last input w/ backspace button
    // add keyboard support