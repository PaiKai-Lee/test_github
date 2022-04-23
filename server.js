const express = require('express')
const app = express();

app.get('/',(req, res)=>{
    const value = process.env.test;
    res.send(`<h1>docker test env = ${value}</h1>`)
})

app.use((err, req, res , next)=>{
    console.log("err test")
    console.log(err)
})

app.listen(3000,()=>{
    console.log('server is listen on http://localhost:3000')
})