/** 
 * 
 * Author: Nathan Nesbitt
 * Date: 2020-10-27
 * 
 * This is a basic calculator in JavaScript, it works similarly
 * to how the microsoft calculator works. It stores the first 
 * value entered, then stores the operator when it is entered,
 * then it strips the second number and does the calculation
 * when you press enter. 
 *  
 * */ 

class Calculator {
    
  // This gets the display for the calculator //
  display = document.getElementsByClassName('screen')[0];
  // First value entered //
  firstNumber = null;
  // Operation to be performed //
  operation = null;

  clear() {
    // Function that resets the display to show 0 //
    this.display.value = '0';
  }

  enter(number) {
    
    // Adds the current value onto the stack
    if (!this.firstNumber || !this.operation)
      return false;

    this.calculateValue(number);
    this.firstNumber = null;
    this.operation = null;
  }

  storeNumber(number) {
    this.firstNumber = number;
  }

  storeOperator(operator) {
    this.operation = operator;
  }

  numberHandle(number) {
    // Adds the number to the calculator //
    if(this.display.value === "0" || this.display.value === "NaN")
      this.display.value = ""
    this.display.value += String(number)
  }

  operatorHandle(operator) {
    // Store the operator
    this.operation = operator;
    // Display the operator on the screen
    this.display.value += String(operator)
  }

  calculateValue(number) {

    // Gets the top two values from the stack, does the operation, and prints them //
    if (!this.firstNumber || !this.operation)
      return false;

    if(this.operation === "/"){
      this.display.value = String(this.firstNumber / number)
      return true;
    }
    if(this.operation === "*") {
      this.display.value = String(this.firstNumber * number)
      return true;
    }
    if(this.operation === "+"){
      this.display.value = String(parseInt(this.firstNumber) + parseInt(number));
      return true;
    }
    if(this.operation === "-"){
      this.display.value = String(this.firstNumber - number)
      return true;
    }
  }

  decimalHandle() {
    // Adds a decimal to the current value in the calculator //
    this.display.value += ".";
  }

  calculate(){
    
    // This runs the main calculation script //
    
    document.addEventListener('click', (event) => {

      const { target } = event;

      if (target.classList.contains('enter')) {
        // We have to strip the input so we only have #2, I would probably just
        // give the students this as it is a little more complicated
        var secondNumber = String(this.display.value).split(this.operation)[1] 
        this.enter(secondNumber)
      }
      else if (target.classList.contains('operator')) {
        // We are going to get the number from the input //
        this.firstNumber = this.display.value;
        // Then we are going to handle the operator //
        this.operatorHandle(target.value);
      }

      else if (target.classList.contains('number')) {
        this.numberHandle(target.value);
      }
  
      else if (target.classList.contains('decimal')) {
        this.decimalHandle(target.value);
      }
  
      else if (target.classList.contains('clear')) {
        this.clear(target.value);
      }
    });
  }
}

// This makes it so that the JS only runs once the window has loaded.
document.addEventListener('DOMContentLoaded', function(){
  // Creates the new calculator object //
  calculator = new Calculator();
  // Starts the script //
  calculator.calculate();  
});

