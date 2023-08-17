var h1tag = document.querySelector('h1');
var namet=prompt("Enter your name.");

function setname(name){
    if(name==null || name.length == 0)
    {
        alert("You have to enter your name");
    }
    else{
        h1tag.textContent="Your name is : "+ name;
    }

}
setname(namet);
