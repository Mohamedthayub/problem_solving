function sumof(num){
    if(num == 0){
        return 0;
    }
    return num + sumof(num - 1);
}
console.log(sumof(3));

// i solved this problem by another approach called functional method

