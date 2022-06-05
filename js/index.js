// Array 
var arr = [1,2,3,4,5,'rupinder',4545,"Hello",];

console.log(arr);
// Write in next line

/* for(var i=0;i<arr.length;i++){
    console.log(arr[i])
 } */

// Second Method
arr.forEach(function(element){
console.log(element)
}) 

// Alert
/* alert('Pause');
 console.log("Alert was Dismissed");  */

Function
function div(a,b){
    return (a/b);
}
c0 = div(35,5);
console.log('Division of 35/5 =', c0);

 //Arrow Function
 avg = (a,b) =>(a+b)/2;
 sum = (a,b) => a+b;
 sub = (a,b) => a-b;
 mul = (a,b) => a*b;
 div = (a,b) => a/b;
 
 c1 = avg(15,15);
 c2 = sum(7,8);
 c3 = sub(45,4);
 c4 = mul(5,7); 
 c5 = div(40,5);
console.log(c1,c2,c3,c4,c5);


