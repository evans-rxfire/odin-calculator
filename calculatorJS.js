//To do list:
//create function for basic math operators: add, subtract, multiply, divide
//a calculator operation will consist of a number, an operator, and another number. create three variables one for each part of operation
//create a new function called operate() that takes an operator and two numbers then calls one of the functions on the numbers
//create functions that populate the display when digit buttons are clicked. content of display stored in variable for later use
//store 1st and 2nd numbers input by user, then operate() on them when user clicks = button - based on the operator selected between numbers
    //when operate() called, update display with result of oepration
    //determine how to store all values and call operate() function with them. === hardest part of project

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