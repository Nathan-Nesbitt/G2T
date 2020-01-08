/** 
 * 
 * This is a reverse polish notation calculator object. 
 * 
 * The idea behind a RPN calculator is that you enter
 * the values, they get added to a stack, and then you 
 * "pop" off the values from the stack as you add operators.
 * This is much simpler than a regular calculator, as it does
 * not require recursion to handle more than 2 values. So the
 * last number will be applied to the operator along with whatever 
 * number is currently in the register.
 *  
 * */ 

class Calculator {
    
  // This gets the display for the calculator //
  display = document.getElementsByClassName('screen')[0];
  stack = [];

  clear() {
    
    // Function that resets the display to show 0 //
    
    this.display.value = '0';
    
  }

  enter() {
    
    // Adds the current value onto the stack
    this.stack.push(this.display.value);
    this.clear();
    console.log(this.stack);
  
  }

  numberHandle(number) {
    // Adds the number to the calculator //
    if(this.display.value === "0" || this.display.value === "NaN")
      this.display.value = ""
    this.display.value += String(number)
  }

  operatorHandle(operator) {

    // Gets the top two values from the stack, does the operation, and prints them //
    if (this.stack.length < 2)
      return false;

    var value_1 = this.stack.pop()
    var value_2 = this.stack.pop()
    if(operator === "/"){
      this.display.value = String(value_1 / value_2)
      return true;
    }
    if(operator === "*") {
      this.display.value = String(value_1 * value_2)
      return true;
    }
    if(operator === "+"){
      this.display.value = String(parseInt(value_1) + parseInt(value_2));
      
      return true;
    }
    if(operator === "-"){
      this.display.value = String(value_1 - value_2)
      return true;
    }
  }

  decimalHandle() {
    
    // Adds a decimal to the current value in the calculator //
    
    this.display.value += ".";
    
  }

  calculate(){
    
    // This runs the main calclation script //
    
    document.addEventListener('click', (event) => {

      const { target } = event;

      if (target.classList.contains('enter')) {
        this.enter(target.value)
      }
      else if (target.classList.contains('operator')) {
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

