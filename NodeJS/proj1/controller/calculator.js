module.exports.add=(req,res)=>{
    console.log(req.body);
    let summ=req.body.num1+req.body.num2;
    res.send(`Sum = ${summ}`);
}

module.exports.sub=(req,res)=>{
    console.log(req.body);
    let diff=req.body.num1-req.body.num2;
    res.send(`Difference = ${diff}`);
}

module.exports.mul=(req,res)=>{
    console.log(req.body);
    let mul=req.body.num1*req.body.num2;
    res.send(`Product = ${mul}`);
}

module.exports.div=(req,res)=>{
    console.log(req.body);
    let div=req.body.num1/req.body.num2;
    res.send(`Division = ${div}`);
}
