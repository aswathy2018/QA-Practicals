const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send(`Date is: ${new Date()}`)
})

app.listen(5000, ()=>console.log("Connected"))