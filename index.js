const express = require("express");
const app = express();
const path = require("path");


app.set("view engine" , "ejs");
app.get("/",(req,res)=>{
res.render("home");
});
app.get("/ig/:username", (req,res)=>{
const instaData = require("./insta.json");
const {username} = req.params;
const data = instaData[username];
if (data){
res.render("instagram" , {data} );
}else{
 res.render("error.ejs" , {username});
}

});
app.listen(8080 , ()=>{
    console.log("server started at http://localhost:8080");
});