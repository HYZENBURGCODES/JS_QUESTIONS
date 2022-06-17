

var date1 =  new Date(); //current date and time
var date1_string=date1.toLocaleString();

var date2_string= new Date(new Date(date1).setMinutes(date1.getMinutes() + 30));
var date2= new Date('2022-05-13T16:29:09.864Z');

var balance_int;

var calc;

var d1=date1.getTime();
var d2=date2.getTime();

if(d1>d2)
{
    balance_int= d1 - d2;
    console.log("Time Passed");
}
else{
    balance_int= d2 - d1;
    console.log("Time Not Passed");
}



console.log("Now Date String::",date1_string);
console.log("New  String::",date2_string.toLocaleString());

console.log("Now Date::",date1);
console.log("New Time::",date2_string);

console.log("Balance::",balance_int);