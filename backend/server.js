const express= require("express");
const notes = require("./data/notes");

const app=express();

app.listen(8080,console.log("Server started"));

app.get('/',(req,res)=>{
    res.send("API Running")
})

app.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app.get('/api/notes/:id',(req,res)=>{
    const note= notes.find((n)=>n._id==req.params.id);
    res.send(note);
})