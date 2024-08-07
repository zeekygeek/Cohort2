const express = require('express')

const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/route-handler', (req, res) => {  
    res.json({
        name: 'ayush',
        age : 20
    })
})

app.post('/conversations', (req, res) => {
    console.log(req.headers)
    console.log(req.headers.authorization)
    res.send('<b>Hi there :: Post Req<b>')
})
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(port)