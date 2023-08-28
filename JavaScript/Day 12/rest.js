function printNumbers(...rest){
    rest.forEach((ele)=>{
        console.log(ele);
    });
    
    const [firstele]=[...rest]; //... => spread operator
    console.log("First : ",firstele);
}

printNumbers(1,2,3,4,5,6,7,8,9);

/* OUTPUT
1
2
3
4
5
6
7
8
9
First :  1
*/