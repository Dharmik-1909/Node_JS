const express = require("express");

const app = express();

// static route

app.get("/",(req,res)=>{
    res.send("hello this is home page");
});

app.get("/about",(req,res)=>{
    res.send("hello this is about page");
});

app.get("/project",(req,res)=>{
    res.send("hello this is project page");
});

app.get("/contact",(req,res)=>{
    res.send("hello this is contact page");
});

app.get("/blog",(req,res)=>{
    res.send("hello this is blog page");
});

app.listen(3000);