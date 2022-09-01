const express = require('express')

const app = express()
const PORT = 8000

app.get('/add/:x/:y', (req, res) =>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    const sum = x + y

    res.send(`The sum of ${req.params.x} and ${req.params.y} is ${sum}`)
})

app.get('/subtract/:x/:y', (req, res) =>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    const diff = x - y

    res.send(`The difference of ${req.params.x} and ${req.params.y} is ${diff}`)
})

app.get('/multiply/:x/:y', (req, res) =>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    const prod = x * y

    res.send(`The product of ${req.params.x} and ${req.params.y} is ${prod}`)
})

app.get('/divide/:x/:y', (req, res) =>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    const quot = x / y

    res.send(`The quotient of ${req.params.x} and ${req.params.y} is ${quot}`)
})

app.listen(PORT, () =>{
    console.log('the server is listening')
})