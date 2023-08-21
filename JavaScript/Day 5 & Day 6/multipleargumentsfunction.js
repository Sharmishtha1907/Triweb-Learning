function multargumnets(multiplier,...args){
    args.forEach((elem)=>{
        console.log(multiplier*elem);
    })
}

multargumnets(2,4,5);

/* OUTPUT
8
10
*/