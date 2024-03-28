const express = require('express')
require('dotenv').config()
// import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
res.send("ronakmangukiya@gmail.com")
})


app.get("/login",(req,res)=>{
    res.send("<h1> plese login with me</h1>")
 })


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})