const express = require('express');
const path = require ('path')

const app = express();
 
// I put ejs in app.js so they help to render any file that is put is views folder
// ye bs unhi file ko render kerega jo file "views name ke folder ke ander hogi"
// (<%= %>) in ejs this helps to solve anything in the code like (<%= 2+2 %>) = 4,(<%= 18-2 %>) =16



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get("/",(req,res)=>{
  res.render("index");
})

app.get("/profile/:username",(req,res)=>{
  res.send(`welcome , ${req.params.username}`);
})

app.listen(3000,()=>{
  console.log("running")
})