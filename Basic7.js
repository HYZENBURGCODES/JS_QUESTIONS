

const myFunction=(a,b,c,d,e,f)=>{

    let sum =a + b;
    let sub= sum - c;
    let multi = sub * d;
    let div= multi / e;
    let Pow = Math.pow(div,f);

    return Pow;
}

console.log("FINAL::", myFunction(2,3,6,4,2,3));