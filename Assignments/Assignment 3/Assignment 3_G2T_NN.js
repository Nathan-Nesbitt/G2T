const mysql = require('mysql2');
const express = require('express');

var path = require('path')

const app = express()

// Routes all inside the public directory //
app.use(express.static(path.join(__dirname, 'public')));

const port = 3001

// Variables for connecting to the database //
const username = "nathan";
const password = "password";
const database = "G2T";
const server = "localhost";


// Create Connection to Database
const connection = mysql.createConnection({
    host: server,
    user: username,
    password: password,
    database: database
});


// Handles request parameters
app.use(express.urlencoded());

// Function that will be called to create the contact //
const create_contact = function(req, res, next) {
    connection.execute(
        "INSERT INTO contactList (`name`, `email`, `phoneNumber`, `notes`) VALUES (?, ?, ?, ?)", 
        [req.body.name, req.body.email, req.body.phoneNumber, req.body.notes],
        (err, results, fields) => {
            if(!err) {
                // Redirects back to the main page //
                res.redirect('/')
            }
            else {
                res.send("<h2>Error Submitting Value</h2>" + err)
            }
        }
    );
}

// Function to load the page and all of the contact info //
const load_page = async function(req, res, next) {

    connection.execute("SELECT * FROM contactList", (err, results, fields) => {
        if(!err) {
            res.render('Assignment 3_G2T_NN.ejs', {contacts: results});
        }
        else {
            res.send("<h2>Error Submitting Value</h2>" + err)
        }
    })
}

// Set the paths for each request //
app.get('/', load_page)
app.post('/', create_contact)

app.listen(port)