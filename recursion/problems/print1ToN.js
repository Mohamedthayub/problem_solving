function print1ToNusingBacktracking(i,n){
    if(i <= 0){
        return;
    }
    print1ToNusingBacktracking(i-1,n);
    console.log(i);
}
print1ToNusingBacktracking(3,3);


// this problem has been done by backtracking approach 
