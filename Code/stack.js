// Creates an empty array (or 'stack' in our case)//
var stack = [];

// Push onto the top
stack.push("Pancake 1");
document.write("<p>Plate of pancakes: " + stack + "</p>");
document.write("<br>");

stack.push("Pancake 2");
document.write("<p>Plate of pancakes: " + stack + "</p>");
document.write("<br>");

// Pull off the top
pancake = stack.pop()
document.write("<p>Pancake Eaten: " + pancake + "</p>");
document.write("<p>Pancakes Remaining: " + stack + "</p>");
document.write("<br>");

// Create a 'queue' //
var queue = [];

// Add to 'end' of queue //
queue.push("Person 1")
document.write("<p>Remaining People: " + queue + "</p>");
document.write("<br>");

// Add a couple people to the end of the queue //
queue.push("Person 2")
document.write("<p>Remaining People: " + queue + "</p>");
document.write("<br>");

queue.push("Person 3")
document.write("<p>Remaining People: " + queue + "</p>");
document.write("<br>");

// Take the first person in line //
person = queue.shift()
document.write("<p>Person Chosen: " + person + "</p>");
document.write("<p>Remaining People: " + queue + "</p>");
document.write("<br>");

// Take the first person in line //
person = queue.shift()
document.write("<p>Person Chosen: " + person + "</p>");
document.write("<p>Remaining People: " + queue + "</p>");
document.write("<br>");
