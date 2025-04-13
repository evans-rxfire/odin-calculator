# odin-calculator
The Odin Project, Foundations Course: Calculator Project

2025.04.08 Commit:
Boilerplate added
Add all requirements off assignment as comments in respective files. 


2025.04.10 Commit:
Basic HTML layout complete
Simple CSS styling on buttons and display
Rudimentary JavaScript functions for calculator operations. Not tested yet, still working through logic of a few of the functions.


2025.04.12
Fixing errors in JavaScript code and working through the bug situations provided in the assignment documentation.
CSS styling is close to being finalized


2025.04.13
This should be a minimal viable product. All specifications in the assignement are met and bugs accounted for.

HTML
The HTML is pretty straight forward. I did use an Google fonts icon for the backspace button and an font for the calculator display from https://fonts.cdnfonts.com

CSS
Again, nothing too out of the ordinary here.
At some points in the operations, the decimal and equals buttons are disabled (see JS section) and I added som opacity and cursor: not-allowed; for a visual indication that they could not be clicked.
The display will show "Error" if an operation is unable to be completed (such as dividing by zero), I changed that font color to red so it would stand out a little.

JavaScript
The first step was too create functions for the math operations, set variables for the first number, the operator, and the second number. 
consts were also created for the different types of buttons that are in the calculator: numbers, operators, decimal, equals, clear, and backspace.
A couple other variables were initialized: currentInput for whatver was currently being typed/clicked by the user, and justCalculated which is used to keep inputs from appending results in a later function.
I'm not sure if this is how things are supposed to be formatted, but it seemed appropriate to have all constants and variables in one place - towards the front of the code.

The operate() function will return the result of the appropriate math function constants, depending on the operator selected by the user - while also returning an Error if needed. 

updateEqualsButtonState() will disable the equals button unless the user has input the required numbers and an operator.

checkForDecimal() is a similar function that disables the decimal button if the current input already includes a decimal

The next section of the code contains the event listeners.

The number button event listener first checks if what is displayed was just calculated. If justCalculated = true, then it clears the display - thus preventing user input to append results of a previous calculation.
Next it ensures that the user cannot input too many numbers so that the text overflows the available display space.
Finally the currentInput is shown in the display and checks on the equals and decimal buttons are made.

The decimal button is similar to the number button. If the user inputs "." first, it will show "0." on the display. 

The operator event listener follows closely with the previous two, with the additional code to ensure that if the user backspaces to clear an operator, the user can then input a new operator.

The equals button event listener is where most of the work is being done in teh calculator.
First, a check is made to ensure that the requirements are met (two numers and an operator).
Then the actual mathematical calculation is made using the operate() function.
A check is then made to determine if an error is present.
If not, then the result is converted to the appropriate length to fit into the available display space.
Finally, the result is shown in the display, variables are reset, justCalculated is changed to true, and checks are made.

The clear button event listener simply does what one would expect - it clears the display and resets the variables.

The backspace button event listener checks the length of the current input and if it is greater than zero, uses the slice() method to shorten it by one character. 
If the current input is empty, then it checks the operator variable and clears if if a value is found. (and also runs the standard checks)

The final event listener is for keyboard input in case the user would rather use the keyboard instead of a mouse to click buttons. 
The keyboard inputs will trigger the corresponding on click event listeners already defined in the code. 
The user can use either the = key or Enter for "=" and either the ESC or c key will work for the "clear" button.