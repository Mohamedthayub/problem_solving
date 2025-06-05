function checkPalidrome(str){
    let start = 0;
    let end = str.length - 1;
    while(start <= end){
        if(str[start] != str[end]){
            return "Not Palidrome";
        }
        start++;
        end--;
    }
    return "Palidrome";
}
console.log(checkPalidrome("thayub"));