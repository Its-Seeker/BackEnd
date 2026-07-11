import express from 'express'

const app = express()

//  middleware so what is middleware middle ware routing se phale chalne vali chij jo kuch bhi hum routing se phale chlani hai vo middleware hai so what is routing routing is like "/"this is home page route "/about" this is about page route and route is wriiten in app.get to app.get se phale koi bhi kam kerna hai toh usse hum middleware bolte hai(app.use) se hum isse use ker sakte hai.
// app.use ke ander next isliye hota hai to end the use command and go to next command whatever is written to be next!


app.use(function (req,res,next){
 console.log("its is midlleware")
 next();
});

app.get("/", (req, res) => {
  res.send('Hello World')
})

app.use((err,req,res,next)=>{
  console.error(err.stack)
  res.status(500).send('something Broke!')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})