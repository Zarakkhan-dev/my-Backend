const express =require("express");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
res.json({message:"hellow"});
})

app.post("/home",(req,res)=>{
    const{name} = req.body;
    console.log(name)
    res.send("registered live")
})

app.listen(3000,()=>{
    console.log("port is listening ")
})