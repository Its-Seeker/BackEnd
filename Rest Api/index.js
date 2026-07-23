const express = require("express")
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.use(express.json());

//Routes
app.get('/users', (req,res) => {
 const html = `
 <ul>
 ${users.map(user=>`<li>${user.first_name}</li>`)}
 </ul>
 `;
 res.send(html);
})

// Rest APIs points
app.get('/api/users', (req,res) => {
 return res.json(users);
})

app.route('/api/users/:id').get((req,res) => {
 const id = Number(req.params.id);
 const user = users.find((user) => user.id===id);
 return res.json(user);
})
.patch((req,res) => {
  //todoo: edit the user with id 
 return res.json({status: "pending" });
})
.delete((req,res) => {
  //todoo: delete the user with id 
 return res.json({status: "pending" });
})


app.post('/api/users', (req,res) => {
 const user = { ...req.body, id: users.reduce((max, user) => Math.max(max, user.id), 0) + 1 };
 users.push(user);
 return res.status(201).json(user);
})


app.listen(PORT, () => console.log(`server started at PORT:${PORT}`))
