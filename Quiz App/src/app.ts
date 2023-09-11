
import express from 'express';
import mongoose from 'mongoose';

import UserRoute from './routers/user';

const app=express();
const connectionString = "mongodb+srv://beinggarffield:Shanu@prac.mb0f7y3.mongodb.net/workshop?retryWrites=true&w=majority"

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello Shanu");
})

//Redirect /user

app.use('/user',UserRoute);

mongoose.connect(connectionString).catch((error) => {console.log(error);
return;});

app.listen(process.env.PORT,()=>{
    console.log("server connected");
});