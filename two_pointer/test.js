function isPalidrome(str){
    let start = 0;
    let end = str.length - 1;
    if(str.length == 0){
        return "Not Palidrome";
    }
    while(start < end){
        if(str[start] != str[end]){
            return "Not Palidrome";
        }
        start++;
        end--
    }
    return "Palidrome "
}

console.log(isPalidrome("school"));