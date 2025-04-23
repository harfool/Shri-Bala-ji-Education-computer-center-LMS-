import express from 'express'
const app = express()
const Port = 4000
app.get("/" ,(req , res)=>{
    res.send("hlo harfool")
})

app.listen(Port , ()=>{
    console.log(`server run on Port ${Port} `)
})