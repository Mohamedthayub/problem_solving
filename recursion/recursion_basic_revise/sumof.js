// sumof the number using recursion 
let sum = 0 ;
function sumof(num){
    if(num < 0){
        console.log(sum);
        return;
    }
    sum = sum + num;
    sumof(num-1);
}
sumof(5);


// passing argument to function  in sumof number

function sumof2(i,sum){
    if(i < 0){
        console.log(sum);
        return;
    }
    sumof2(i-1,sum + i);
}
sumof2(5,0);


// i solved this problem by another approach called functional method

function sumof3(num){
    if(num == 0){
        return 0;
    }
    return num + sumof3(num - 1);

}
console.log(sumof3(5));
