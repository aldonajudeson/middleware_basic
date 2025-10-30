const express=require("express")
const app=express()
const port=8000


app.use("/",(req,res,next)=>{
    console.log(req.method,Date.now(),req.url)
    next()
})

app.get("/name",(req,res)=>{
    res.send("Aldona")
})

app.get("/place",(req,res)=>{
    res.send("Ernakulam")
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})