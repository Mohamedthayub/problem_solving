function findNonRepeatingcharacter(str){
    let map = new Map();
    for(let char of str){
        map.set(char,(map.get(char) ||  0) + 1);
    }
    for(let [key,value] of map){
        if(value  == 1){
            return key;
        }
    }
    return -1;
}
console.log(findNonRepeatingcharacter("hhellooo"));

