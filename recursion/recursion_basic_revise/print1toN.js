function print1toN(i,n){
    if(i > n){
        return;
    }
    console.log(i);
    print1toN(i+1,n);
}
print1toN(1,5);


// print 1 to N without loop using recursion
 