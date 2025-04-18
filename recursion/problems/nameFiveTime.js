// print name five times

let count =  1;
function printName(num){
    if(count > num){
        return ;
    }
    count++;
    console.log("thayub");
    printName(num);
} 
printName(5); // this is my first approach when i see the question it came to my mind

function printname(i,n){
    if(i > n){
        return;
    }
    console.log("Thayub");
    
    printname(i+1,n);
}
let num = 5;
printname(1,num); // this is the correct solution 
