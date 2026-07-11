import express from "express";
import {PORT} from "./env.js"

const app = express ();

// app.get("/", (req,res)=> res.send("<h1> Hello World! </h1>"));

// app.get("/about", (req,res)=> res.send("<h1>Hello about page!</h1>"));


// app.get("/contact", (req,res)=>{
//  return res.send(`const team = [
//   {
//     name: "Ketan",
//     role: "React js Developer",
//     desc: "Builds modern, responsive UI using React.",
//     image: ketanImg,
//     linkedin: "https://www.linkedin.com/in/ketan-arora-028961325/",
//     github: "https://github.com/Its-Seeker",
//   },`)});


// const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
  // console.log(`Server is running at port : ${PORT}`);
  console.log("server is running at port 3000");
  
  
});