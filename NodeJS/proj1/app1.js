const express = require('express');
const app =express();
const calculatorRouter = require('./router/calculator');
app.use(express.json());

app.get('/',(req,res)=>{ //console.log(req);
res.send("Response send");
})//router 

// app.get('/add',(req,res)=>{
//    // res.send("Addition");
//    let n1=3;
//    let n2=4;
//    let sum=n1+n2;
//    res.send(`Sum = ${sum}`);
// })

app.use('/calculator',calculatorRouter)
app.listen(3000);//port

