// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

const myFunctions=(a,n)=>{

    if(n>a.length)
    {
        return false;
    }
    else{
        return a.charAt(n);
    }
} 

console.log("Nth Value::", myFunctions('testing',4));