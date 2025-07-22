const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    throw new Error("Unexpected error occured..")
})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(404).send("An unexpected error occured. Please try again!!")
})

app.listen(5000, ()=>console.log("Connected"))