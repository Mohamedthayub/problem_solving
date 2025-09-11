function reverseString(str){
    let arr = str.split("");
    let start = 0;
    let end = str.length - 1;
    while(start < end){
        [arr[start], arr[end]] = [arr[end] , arr[start]];
        start++;
        end--;   
    }
    return arr.join("");
}

console.log(reverseString("thayub"));