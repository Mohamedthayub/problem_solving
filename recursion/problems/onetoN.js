// print the number one to N times;
function  printNum(i,n){
    if(i > n){
        return;
    }
    console.log(i);
    printNum(i+1,n);
}
let num = 10;
printNum(1,num);
