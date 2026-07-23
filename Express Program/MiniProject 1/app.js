const express = require('express');
const path = require ('path')
const fs = require('fs');
const app = express();
 
// I put ejs in app.js so they help to render any file that is put is views folder
// ye bs unhi file ko render kerega jo file "views name ke folder ke ander hogi"
// (<%= %>) in ejs this helps to solve anything in the code like (<%= 2+2 %>) = 4,(<%= 18-2 %>) =16



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get("/",(req,res)=>{
  fs.readdir(`./files`,function(err,files){
    res.render("index",{files: files});
  })
})

app.get("/file/:filename",(req,res)=>{
  fs.readFile(`./files/${req.params.filename}`,"utf-8",(err, filedata)=>{
    res.render('show', {filename: req.params.filename, filedata:filedata})
  })
})

app.get("/edit/:filename",(req,res)=>{
  res.render('edit',{filename: req.params.filename})
})


app.post("/edit",(req,res)=>{
  fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{
    res.redirect("/")
  })
 
})

app.post("/create",(req,res)=>{
 fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details, function(err){
res.redirect("/")
 });
})

 

app.listen(3001,()=>{
  console.log("running")
})