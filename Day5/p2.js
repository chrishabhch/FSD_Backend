const express=require('express');
const { message } = require('statuses');

const app = express();
app.use(express.json());
let users=[
    {id:1, name: 'Rishabh' ,age: 22},
    {id:2, name: 'agrawal' ,age: 22},
    {id:3, name: 'harsh' ,age: 22},
]

app.get('/users',(req,res)=>{
    res.json(users);
});
app.post('/users',(req,res) => {
    const {username , password } = req.body;
    console.log(`user ${username} and password ${password} received`)
    res.json({message:"data receive"})
})

app.post('/reg',(req,res)=>{
    const newuser = req.body;
    const newid = users.length>0? users[users.length - 1].id+1 : 1;
    newuser.id = newid;
    users.push(newuser);
    res.json(newuser);
})
app.listen(9000,()=>{
    console.log('server is running on port 9000');
});