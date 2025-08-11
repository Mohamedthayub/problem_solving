function check(arr){
    let count = 0; 
    let counts = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            count++;
        }
        else{
            counts.push(count);
            count = 0;
        }
    }
    counts.push(count);
    return  Math.max(...counts) >= 3 ? true : false
}
console.log(check([2,6,4,1]))