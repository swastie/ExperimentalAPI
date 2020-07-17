const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => res.send('Hello World!'))
app.get('/add', function(req, res) {
    
    res.send("sum is  " + (parseInt(req.query.m1) + parseInt(req.query.m2)));
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
