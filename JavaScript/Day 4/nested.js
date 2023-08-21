function sq1(num){
    console.log("Inside func 1");
    function sq2(n1){
        console.log("Inside func 2");  
        function sq3(n2){
            console.log("Inside func 3");
            console.log(n2*n2);
        }
        
        sq3(n1);
    }
    sq2(num)
}

sq1(4);