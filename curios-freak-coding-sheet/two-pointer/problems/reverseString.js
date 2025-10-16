function reverseString(str){
    let result = str.split("");
    let start = 0;
    let end = str.length - 1;
    while(start < end){
        [result[end] ,result[start]] = [result[start], result[end]];
        start++;
        end--;
    }
    let finalValue = result.join("");
    return finalValue;
}
console.log(reverseString("hello"));

