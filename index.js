import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;



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


app.listen(PORT,()=>{
    console.log(`Example app listing on port ${PORT}`) 
})
