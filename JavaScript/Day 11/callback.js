function Failure(error){
    console.log("Mission Failed ",error);
}

function Success(result){
    console.log("Misson Passed /Status : ",result);
}

function validate(name,Succ,Fail){
    if(name!="")
    {
        Succ("Name is valid");
    }
    else
    {
        Fail("Name is invalid");
    }
}

validate("Shanu",Success,Failure);

/* OUTPUT
Misson Passed /Status :  Name is valid
*/