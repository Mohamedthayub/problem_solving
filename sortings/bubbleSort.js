let arr =  [5,4,3,2,1];
for(let i = 0; i<arr.length - 1; i++){
    for(let j = 0; j<arr.length - 1 - i ; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);


let swapped;
for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // clean swap
            swapped = true;
        }
    }
    if (!swapped) break; // stop early if no swaps
}
console.log(arr);