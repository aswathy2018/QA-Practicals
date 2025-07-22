const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log("Application middleware");
    next()
})

app.get('/', (req,res)=>{
    res.send(`Today's date and time is: ${new Date()}` )
})

app.get('/home', (req,res)=>{
    res.send("Hii this is home page of application middle ware")
})

app.listen(5000, ()=>console.log("server.."))