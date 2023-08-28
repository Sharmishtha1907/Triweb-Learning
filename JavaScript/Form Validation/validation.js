const submit=document.getElementById("submit");

function validate(){
    const  firstname=document.getElementById("fname");
    const  lastname=document.getElementById("lname");
    function checkparam(fname,lname){
      if(fname == null||fname==""){
        alert("First name field should not be empty");
        return false;
      }
      if(lname.value==null||lname.value==""){
        alert("Last name field should not be empty");
        return false;
      }
    }
    console.log(checkparam(firstname.value,lastname.value));
}

submit.addEventListener("click",validate);

