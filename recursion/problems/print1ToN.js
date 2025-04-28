function print1ToNusingBacktracking(i,n){
    if(i < 1){
        return;
    }
    print1ToNusingBacktracking(i-1,n);
    console.log(i);
}
print1ToNusingBacktracking(3,3);


// this problem has been done by backtracking approach 

// function  backtrackingprint1ToN(i,n){
//     if(i < 1){
//         return;
//     }
//     backtrackingprint1ToN(i-1,n);
//     console.log(i);
// }
// backtrackingprint1ToN(3,3);

