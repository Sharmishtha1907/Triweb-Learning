
function fibo(n)
{
    if(n<=1)
    {
        return n;
    }

    
    return(fibo(n-1)+fibo(n-2));
}

console.log(fibo(5));
console.log(fibo(3));

/* OUTPUT
5
2
*/