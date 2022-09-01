//import required modules
const { application } = require('express')
const express = require('express')
//create an instance of the express app
const app = express()
const PORT = 8000
//define some routes

app.get('/add/:x/:y', (req,res) =>{
    console.log(req.params)
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    res.send(`${x + y}`)
}) 

// app.get('/add/*', (req, res) =>{
//     let myParams = req.params[0].split('/')
//     let result = myParams.reduce((total, num) => {
//     return total + Number(num)
//     }, 0)
//      res.send(`The sum is ${result}`)
// })

app.get('/subtract/:x/:y', (req, res) =>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    res.send(`${x - y}`)
})
// app.get('/subtract/*', (req, res) =>{
//     let myParams = req.params[0].split('/')
//     let result = myParams.reduce((total, num) => {
//     return total - Number(num)
//     }, myParams)
//      res.send(`The difference is ${result}`)
// })


app.get('/mulitply/:x/:y', (req,res) =>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    res.send(`${x * y}`)
})
// app.get('/multiply/:x/:y', (req, res) =>{
//     const x = Number(req.params.x)
//     const y = Number(req.params.y)
//     const prod = x * y

//     res.send(`The product of ${req.params.x} and ${req.params.y} is ${prod}`)
// })
app.get('/divide/:x/:y', (req, res) => {
    res.send(`${Number(req.params.x) / Number(req.params.y)}`)
})
// app.get('/divide/:x/:y', (req, res) =>{
//     const x = Number(req.params.x)
//     const y = Number(req.params.y)
//     const quot = x / y

//     res.send(`The quotient of ${req.params.x} and ${req.params.y} is ${quot}`)
// })

//Bonus
//less specific routes at the bottom
app.get('/*', (req, res) =>{
    let str = ''
    const math = req.query.math
    const nums = req.params[0].split('/')
    if (math === 'add'){
        const sum = nums.reduce((total, current) =>{
            return Number(total) + Number(current)
        })
        nums.forEach((num, idx) => {
            if(idx != nums.length -1){
            str += ` ${num} +`
            }else {
                str += ` ${num}`
            }
        })
        res.send(`${str} = ${sum}`)

    }else if(math === 'sub'){
        //sub math
    }else if (math === 'mult'){
        //mult math
    }else if (math === 'div'){
        // div math
    }else{
        res.send(`I have never heard of a math called ${math}`)
    }
    console.log(req.params[0].split('/'))
    console.log(req.query)
    res.send('* route')
})

//listen on a port
app.listen(PORT, () =>{
    console.log('the server is listening')
})