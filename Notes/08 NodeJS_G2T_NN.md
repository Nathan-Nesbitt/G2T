# Introduction to NodeJS

## Installing NodeJS and NPM

The easiest way on windows is to install it in using [the official nodejs website](https://nodejs.org/en/):



We can use NVM to install nodeJS. NVM is the Node Version Manager. This allows simpler upgrading and the ability to run multiple versions of node at the same time.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

We can then install the version of node we want using

```
nvm install 12
```

We can use the version by running

```
nvm use 12
```

Now we can install NPM (node package manager)

```
sudo apt install npm
```

## Creating a project 

We want to create a new NodeJS project directory by running:

```
mkdir <project_name>
```

We can then create a new project in this directory by running:

```
npm init
```

This will walk you through some questions on how to initialize you application. We can then install `express` which is a popular web application framework for nodejs:

```
npm install express
```

We can also install EJS which is the templating language.

```
npm install ejs
```

## Serving up files using express

If we create an EJS file `index.ejs` that we want served up when someone visits the
`/` page of our website we can create the file in the `views` directory (this is where express looks for the views):

```
<html>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
```

We can then create an `index.js` which is the main JavaScript file that we will run. I have added
in some additional comments into this code to explain what each line does:

```
// This imports the express libraries //
const express = require('express')
// This creates a basic express object //
const app = express()
// This is just what port we will use to access the node app //
const port = 3000

// This creates a handler for a GET request on the server //
app.get('/', (req, res) => { res.render('index.ejs', {name: "Nathan"}) })

// This runs the express web application //
app.listen(port)
```

## Handling Different Requests Using Express

Now in our hello example we can see that we handled a GET request using express. 
Now what if we want to handle a POST request (for example: a form submission)? 
We can do this by using the `app.post()` method:

```
const express = require('express')
const app = express()
const port = 3000

// Handles request parameters
app.use(express.urlencoded());

// Renders the form that we will submit //
app.get('/', (req, res) => { res.render('post.ejs') });

// Gets the information from a POST request and renders a page using it //
app.post('/', (req, res) => { res.render('index.ejs', {name: req.body.name}) })

app.listen(port)
```

This serves up a file `post.ejs` which we create in the views directory. This contains
the following code:

```
<form method="POST" action="/">
    <label for="name">Your Name</label>
    <input type="text" name="name">
    <button type="submit">Submit</button>
</form>
```

This is a super simple form that sends a POST request to the server with a `name` variable.
Our code will render our original `index.ejs` page when you submit this request with the
entered `name` variable.


## Working with EJS
With EJS we can embed JavaScript inside an HTML file. We can do this by wrapping the JavaScript
in `<% %>` brackets, similarly to how we write PHP code.

## Looping Through Variables in EJS
Looping is quite simple, we can just write a javascript loop in a new page that takes in 
the variable for our array. The following would be our `loop.ejs` file:

```
<html>
    <body>
        <% names.forEach((name) => { %>
            <h1>Hello <%= name %>!</h1>
        <% })%>
    </body>
</html>
```

And this would be our `loop.js` file:

```
const express = require('express')
const app = express()
const port = 3000

app.get('/loop', (req, res) => { res.render('loop.ejs', {names: ["Nathan", "Chris", "Todd"]}) })

app.listen(port)
```

So if we navigate to `/loop` we will get a page that loops through all of our names, 
printing them out!

## Conditionals in EJS
If we only want to display a value if some condition exists we can use conditionals in EJS.
An example of these conditionals could be:

```
const express = require('express')
const app = express()
const port = 3000

app.get('/conditional', (req, res) => { res.render('conditional.ejs', {loggedIn: true }) })

app.listen(port)
```

```
<html>
    <body>
        <% if(loggedIn) { %>
            <h1>You are logged in</h1>
        <% } else { %>
            <h1>You are not logged in</h1>
        <% } %>
    </body>
</html>
```


## Working with MySQL and the NodeJS mysql2 package
We can start to work with MySQL using the mysql2 nodejs package. We can install the
package using NPM

```
npm install mysql2
```

### Create a Connection to a Database 

```
// Get the MySQL2 library // 
const mysql = require('mysql2');
 
// Create a connection to a database //
const connection = mysql.createConnection({
    host: 'localhost',
    user: '<username>',
    password: '<password>',
    database: '<database>'
});
```

### Query the Database

```
connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    (err, results, fields) => {
        // Prints out the results //
        console.log(results); 
        // Prints out the fields //
        console.log(fields); 
    }
);
```

### Query the Database Using Prepared Statements

```
connection.execute(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Rick C-137', 53],
    (err, results, fields) => {
        console.log(results); 
        console.log(fields); 
    }
);
```

---
<small>© Nathan Nesbitt, 2019. Not to be copied, used, or revised without express written permission from the copyright owner.</small>