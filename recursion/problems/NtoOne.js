function printNtoOne(n,i){
    if(n < i){
        return;
    }
    console.log(n);
    printNtoOne(n-1,1);
}
let num  = 10;
printNtoOne(num,1); // my approach was this 

// this problem print Nto1 . 

function printNtoOne(i,n){
    if(i < 1){
        return ;
    }
    console.log(i);
    printNtoOne(i-1,n);
}
let n = 10;
printNtoOne(n,n);
