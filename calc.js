//jshint esversion:6 
//initializing express js
const express = require ("express");
const app = express();

//route for the index
app.get("/", function(req, res){
res.send("Hello, World");
});

//initializing the port 
app.listen(4000, function(){
console.log("the server is started on the port 4000");
});