import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/',(req,res) =>{
    res.send('Hello world from express js')
  
})


const users =[
    {id:1, name:'sagor',email:'sagor@gmail.com'},
    {id:2, name:'karim',email:'karim@gmail.com'},
    {id:3, name:'Rahim',email:'rahim@gmail.com'},
    {id:4, name:'Jamal',email:'jamal@gmail.com'}

    
]

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log('data from client',req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send({success:true,message:'users added successfully'})

})


app.listen(PORT,()=>{
    console.log(`Example app listing on port ${PORT}`) 
})
