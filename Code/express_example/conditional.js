const express = require('express')
const app = express()
const port = 3000

app.get('/conditional', (req, res) => { res.render('conditional.ejs', {loggedIn: true }) })

app.listen(port)