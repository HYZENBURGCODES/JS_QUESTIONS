// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const myFunction=(a,b,c)=>{

    if(a === b && b===c && a===c)
    {
        return true;
    }
    else{
        return false;
    }
   
}

console.log("VALUE::", myFunction(3,3,1));