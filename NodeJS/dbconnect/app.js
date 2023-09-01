const express= require('express');
const app=express();
const userRoute = require('./router/user');

app.use(express.json());
// app.use('/',(req,res)=>{
//      res.send("Responded");
// })

app.use('/user',userRoute);
app.listen(3001);