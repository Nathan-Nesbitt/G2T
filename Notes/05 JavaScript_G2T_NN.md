# JavaScript

## Writing Javascript in an HTML File
```
<script>
    ...Your Code
</script>
```

## Importing an External Script
```
<script src="script.js"></script>
```
From now on all code will be assumed to be imported from an external file.

## Writing to a File
If we want to write text to the file we can use the document.write function.
```
document.write("<h1>Hello, World!</h1>");
```

## Commenting in JavaScript
To create a comment you can either do a single line comment `//` or a multi-line comment `/* */`

```
// This is a single line comment

/*

This is a multiline comment.
I can write as much as I want in here.

*/

```

## Creating a Variable

If we want to create a variable in JavaScript we can simply create it using the following syntax. The variable on the left hand side of the assignment is the 

```
var myVariable = "Woah a new variable";
```

This is the 'initialization' of the variable, it stores the value assigned to it ("Woah a new variable") in memory, so that whenever we reference the variable (myVariable) it will get the value assigned to it.

If we want to change the value, we can simply use the assignment operator (=) to change it's value:

```
myVariable = "Hello";
```

Notice how we don't have to use `var` again. This is because we have already initialized the variable, and we are now 'assigning' the variable a new value.

## Creating a Constant

If we want to create a variable that will not change, we can create a constant. This can be done using:
```
const myConstant = 10;
```

## Creating a block scope variable (let)
This will become more useful once we discuss functions, but when we declare a variable using `let` it restricts it's visibility to the current block. This is good practice as you often do not want to create variables that are 'global', as you may need to re-use the names in different functions (for example we use 'i' as a variable a lot). These variables can be defined using the following syntax:

```
let myVar = 10;
```
## Operators
Most of the operators are the same as math. 

### Arithmetic Operators

- \+ is addition
- \- is subtraction
- \* is multiplication
- \** is exponentiation (x**2 is the same as x^2 in math)
- \/ is division
- % is modulus (remainder from division) 

### Comparison Operators
These are used to compare two values. They will return a boolean (TRUE or FALSE) depending if the comparison was true or false.

- `==`  equal (e.g. 1 == 1 is true)
- `!=`  not equal (e.g. 1 != 2 is true)
- `<=`  less than or equal  (e.g. 1 <= 2 or 1 <= 1 is true)
- `\>=` greater than or equal (e.g. 3 >= 2 or 1 >= 1 is true)
- `<`   less than (e.g. 1 < 2 is true but 1 < 1 is false)
- `\>`  greater than (e.g. 2 > 1 is true but 2 > 2 is false)


### Assignment Operators

There is one main assignment operator `=` but there are also some little shortcuts in javascript for commonly used assignment operations

- `x += 1` is the same as `x = x + 1`
- `x++` is the same as `x = x + 1`
- `x -= 1` is the same as `x = x - 1`
- `x--` is the same as `x = x - 1`
- `x /= 1` is the same as `x = x / 1`
- `x *= 1` is the same as `x = x * 1`
- `x %= 1` is the same as `x = x % 1`
- `x **= 1` is the same as `x = x ** 1`   

### Logical Operators

- `&&` is the AND operator (use it like you would use the word AND)
- `||` is the OR operator (use it like you would use the word OR)
- `!` is the NOT operator (use it like you would use the word NOT)

## Operators and Variables
Variables can be treated the same as their values. So if we want to divide 10 by 2, we could do it using variables:
```
var A = 10;
var B = 2;

var C = A / B;

console.log(C);

// 5 //
```

## Data Types
There are many different datatypes in javascript. These tend to be quite consistant between languages:

- String
- Number
- Boolean
- Object
- null or undefined

You can check the datatype by using the `typeof` call:

```
typeof "My String";

// The output of this would be "String" //
```

For more on data types in javascript you can simply google 'data types in javascript' or use [W3](https://www.w3schools.com/js/js_datatypes.asp).

## Conditional Statements (IF)

### General Explenation
This is the basis of most computing is checking statements. A statement simply runs code if the value it is checking is true. For example an example in real life:
```
if nathan is awesome:
    everyone gives nathan a high-five

OR

if you win the lottery:
    you get a lot of money
``` 

We can also have multiple different checks in a row, if the first one fails:

```
if nathan is older than 65:
    Nathan is a senior

else if nathan is older than 19:
    Nathan is an adult

else if nathan is older than 12:
    Nathan is a teen
.
.
.
```

We can also say that there is a success if all other cases fail. This can be done using an else statement:

```
if Nathan wins the lottery:
    Nathan will be very rich

else if Nathan's friends win the lottery:
    Nathan will be very rich

else:
    Nathan will still be poor
```

### In Javascript

The example of me winning the lottery can be represented using JavaScript:

```
if (winner) {

    var nathanIsPoor = false;    

}
else if (friendWinner) {

    var nathanIsPoor = false; 

}
else {

    var nathanIsPoor = true;

}
```

## Loops

### For Loop

```
for (var i = 0; i <= 5; i++){	
	document.write(i);  // Prints 0 to 5	
}
```

### While Loop

```
var i = 0;  
while (i <= 2){
	document.write(i); // Writes 0 to 2
	i += 1;
}
```

## Data Structures
This is the more interesting part of computing: structures. Structures allow you to store and retrieve data.

### Array
An array is simply a variable that holds a 'list' of elements. If you want to create an empty array you can do it using:

```
var myArray = [];
```

If you want to create a fixed length array you can use the Array object:

```
var myArray = new Array(10); // Creates an array of 10 elements //
```

For example if I had a shopping list, I could represent it with an array:

```
var shoppingList = ["Oranges", "Juice", "Rice"];
```

If I want to add an element to this array I can use the `push` method for the array

```
shoppingList.push("Cookies");
document.write(shoppingList);
```

If we want to remove and look at the last element we can use the `pop` method:

```
var myItem = shoppingList.pop()
document.write(myItem);
```

We can also index (get) an element based on it's position in the array:

```
var myItem = shoppingList[0];
document.write(myItem);
```

If we want the length of an array we can find it using the `.length` property
```
var myItem = shoppingList.length;
document.write(myItem);
```

### Stack
A stack is simply a 'pile' of elements using the FILO (First in last out). We can either add an element to the top, or we can get an element from the top. We cannot get an element from the bottom or anywhere else.

### Queue
A queue is like a line in a store. It uses the FIFO (First in first out) which means that we can either add an element to the bottom or pull one from the top. We cannot get an element from anywhere else.

## Functions
Functions allow us to create segments of code that we can call over-and-over again. We often use functions and don't even realize it. Each time you call `document.write()` we are calling a function `write()` which runs some code somewhere in a javascript library. This is much better than having to re-implement the code each time we want to print out something. Here is the basic syntax for creating a function. 

```
function <functionName>(<functionParameters>) {
    .
    .
    .
    return <valueToReturn>
}
```

This is an example function that takes in a number and squares it:

```
function squareMe(x) {
    return x**2;
}
```

If you want to call this function:

```
var val = squareMe(2);
```

## HTML and JavaScript

### Events
We can catch an event when it happens and run some code based on it. 

Some of the possible events that can be handled are:

- `onclick` -     If something has been single clicked
- `ondblclick` -  If something has been double clicked
- `onmouseover` - If the user's mouse is over an element
- `onkeypress` -  If a key has been pressed
- `onchange` -    An HTML element has been changed
- `onkeydown` -   When the key has 
- `onselect` -    When an element has been selected
- `onsubmit` -    Form has been submitted
- `onload` -      Browser has loaded page
 
And this is the event that happens when the page loads (this will be useful for assignment 2)

### Event Listener
If we are going to do something when an event happens we can use the `document.addEventListener` function. This takes in one of the events that could happen and a function that will be called when the event happens. 

For example you could have an click listener, which will run when a button is pushed inside on the document.

```
document.addEventListener("click", function(){
        document.write("Hello World!"); 
    });
```

Or for the double click you could use

```
document.addEventListener("dblclick", function(){
        document.write("Hello World!"); 
    });
```

Or if you want to check to see if the page loaded correctly you can use:

```
document.addEventListener('DOMContentLoaded', function(){
    document.write("Page Loaded Successfully."); 
});
```

### Getting an element 
If we want to work with HTML elements we need to be able to find and save them as variables. There are a couple of functions that will allow you to find them.

If you want to get one based on it's ID you can use the `getElementById()` 

Or if you want to get an element based on it's class you can use the `getElementByClass()` 


Or by the tagname using `getElementsByTagName()`.

```
document.getElementById("someId");
document.getElementByClass("someClass");
document.getElementsByTagName("p");

```