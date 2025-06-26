function printNto1(n){
    if(n < 1){
        return;
    }
    console.log(n);
    printNto1(n-1);
}
printNto1(5);  // first approach 



function  printNto12(i,n){
    if(i < 1){
        return ;
    }
    console.log(i);
    printNto12(i-1,n);
}
printNto12(5,5);

// print N to 1 without loop using recursion
