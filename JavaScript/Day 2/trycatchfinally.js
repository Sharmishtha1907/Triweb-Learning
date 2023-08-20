function validateUser(name, password){
    try{
        if(name.length < 5){
            throw new Error("Username must have atleast 5 characters");
        }
        
        if(password.length < 6){
            throw new Error("Invalid password");
        }
        console.log("Accepted");
        return "In try block";
        }
        catch(error){
            console.log(error);
            return "Fail in catch";
        }finally{
            console.log("Inside finally block");
            return "From finally";
            // overwrites the previous return statement
        }
}

let name = "shanu";
let password = "19072002";
let msg = validateUser(name, password);
console.log("user:",msg)

/* OUTPUT 
Accepted
Inside finally block
user: From finally
*/