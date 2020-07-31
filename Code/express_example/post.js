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