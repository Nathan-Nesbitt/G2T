# Introduction to PHP

## Creating a PHP file
PHP files are created using the `<?php?>` tag. This can be embedded inside of an HTML page or can be created in it's own .php file. These PHP files can also include HTML, JavaScript and CSS. PHP is different from JavaScript, as PHP is run on the server **not** the client. 

### Why does server vs client matter?

If we are writing an application, since javascript is run in the client, any code run is  **Insecure** as the server is not in total control of the code. This means that in theory (and this is not difficult to do in practice) the client could change the code that the server runs.

This may not seem like a big deal when we are only writing code for a font end, it becomes a *very big deal* when we start to store state on the server, or rather when we start to work with **databases**. 

### Why is it not okay to allow the user to change the code that the server will run?

Later on we will be covering databases and specifically how to delete or rather **DROP** a database or table. You may write the following code which inserts some values into our database:

```{SQL}
INSERT INTO bananas "id" VALUES ("1", "2", "3");
``` 

And the user could change our code to say:

```{SQL}
DROP TABLE bananas;
```

This is not good. We just went from inserting values, to dropping our entire table, and we didn't even know!

So how do we stop this from happening? We use server side scripting languages like PHP. Because all of the code is kept from the user, we can 'trust' (mostly) that our code will do what is expected. 

### Hello World in PHP 
```
<?php
    echo "This is the Hello World for PHP";
?>
```

## Comments
We can create a comment by using either the `//` or `#`.

```
//  This is a comment
#   This is also a comment
```
## Variables
Variables must start with a dollar sign `$` in PHP. 
```
$variable = 5;
$newVariable = "This is a string";
```

## Operators
There are some basic operators in PHP just like any other language. 

### Arethmatic Operators

```
+  - Addition
-  - Subtraction
*  - Multiplication
/  - Division
%  - Modulus
** - Power
```

### Assignment Operators
```
=-  - Equality
+=  - Increment (Same as x = x + y)	
-= 	- Subtract and increment (Same as x = x - y)	
*= 	- Multiplication Increment (Same as x = x * y) 	 	
/= 	- Division Increment (Same as x = x / y) 	
%= 	- Modulus (Same as x = x % y)
```

### Comparison Operators
```
==  - Equal ($x == $y) 	
=== - Identical ($x === $y) 	
!= 	- Not equal ($x != $y )	 	
<> 	- Not equal ($x <> $y) 	 	
!== - Not identical ($x !== $y) 	
>   - Greater than ($x > $y) 	
<   - Less than ($x < $y) 	
>= 	- Greater than or equal to ($x >= $y)	
<= 	- Less than or equal to ($x <= $y) 
```

### Incremental Operators
``` 	 	
$x++ 	Post-increment 	 	
$x-- 	Post-decrement 
```

### String Operators
```
.  - Concatenation
.= - Concatenation assignment
```

## Arrays

### Indexed Array
```
// We can define an array with //
$myArray = array("Nathan", "Is", "Awesome");

// We can access the elements in the array with //
echo "" . $myArray[0] . " " . $myArray[1] . " " . $myArray[2] ;
```

### Associative Array
```
// We can define an array with //
$ages = array("Nathan"=>"10", "Joe"=>"20");

// We can access the elements in the array with //
echo "Nathan's age is: " . $myArray["Nathan"];
```

## Variable Scope
### Local
A regular variable is a local variable. 
```
$NathanAge = 5;
```

### Global
Globals are avalible at any point in the program. You can define a global with

```
global $NathanAge = 10;
```

And you can access all of the variables by using the `$GLOBALS` variable:

```
$GLOBALS['NathanAge'] = 112
```

### Super Globals
Super globals are special variables that are accessible in any part of the program. There are many super globals:

```
$_GET
$_POST
$_FILES
$_ENV
$_COOKIE
$_SESSION
$_REQUEST
```

## Conditionals
```
$age
if ($age <= 19) {
    echo "You're not old enough to vote!";
}
else if($age >= 64) {
    echo "You can retire!";
}
else {
    echo "Tax Time!";
}
```
## Loops
### For Loop
```
for ($number = 0; $number <= 5; $number++) {
    echo "$number";
} 
```
### For Each
```
$colors = array(0, 1, 2, 3, 4, 5);

foreach ($numbers as $number) {
  echo $number;
}
```
### While Loop
```
$number = 0
while($number <= 5) {
    echo "$number";
    $x++;
} 
```
### Do While
```
$number = 0;

do {
    echo "$number";
    $number++;
} while ($number <= 5);
```

## Functions

```
function helloWorld() {
    echo "Hello world!";
}

helloWorld();
```

## MySQL

If you want to work with MySQL in PHP you can use the mysqli library which can be found on the [PHP site](https://www.php.net/manual/en/book.mysqli.php).


### 1. Create a connection to a database

```
<?php
    $username = "<yourUsername>";
    $password = "<yourPassword>";
    $database = "<yourDatabase>";
    $server = "localhost";

    $connection = new mysqli($server, $username, $password, $database);
?>
```

### 2. Create a prepared statement and bind the parameters

The `?` implies a spot that will be filled with a variable.

```
// Creates the prepared statement
$query = $connection->prepare("INSERT INTO <table> (<column1>, <column2>) VALUES (?, ?)");

// Binds the parameters into the `?` //
$query->bind_param("ss", '<value1>', '<value2>');

```

### 3. Execute and get the values back (if you are expecting data back)

```
// Execute the statement //
$query->execute();

// get the result //
$result = $query->get_result();
```

### 4. Itterating through the values from the query

```
while($row = $result->fetch_assoc()){
    echo($row['<column1>']);
    echo($row['<column2>']);
}
```

For example a completed program to query all phone numbers from a database `phoneNumbers` that has `name` and `phoneNumber` columns/fields where `name` is `nathan`:

```
    // Define our variables //

    $username = "nathan";
    $password = "password";
    $database = "phoneNumbers";
    $server = "localhost";

    // Creates a connection //
    
    $connection = new mysqli($server, $username, $password, $database);

    // Creates the prepared statement //
    
    $query = $connection->prepare("SELECT * FROM phoneNumbers WHERE name = ?");
    
    // Binds the parameters into the `?` //
    
    $query->bind_param("s", 'nathan');

    // Execute the statement //
    
    $query->execute();

    // get the result //
    
    $result = $query->get_result();

    // Itterate through the results //

    while($row = $result->fetch_assoc()){
        echo($row['phoneNumber']);
    }

    // Closes the connection
    $connection->close();


```

---
<small>© Nathan Nesbitt, 2019. Not to be copied, used, or revised without express written permission from the copyright owner.</small>