const express = require('express')
const app = express()

app.get("/user/:id", (req, res)=>{
    const id = req.params.id
    const {age, city} = req.query

    res.send({
        message: "Hiii",
        userId: id,
        age: age,
        city: city
    })
})

app.listen(4002, ()=>console.log("Server running"))