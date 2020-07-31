const express = require('express')
const app = express()
const port = 3000

app.get('/loop', (req, res) => { res.render('loop.ejs', {names: ["Nathan", "Chris", "Todd"]}) })

app.listen(port)