import express from 'express'

const app = express()

// these both line helps to reads data that what is going in the server 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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