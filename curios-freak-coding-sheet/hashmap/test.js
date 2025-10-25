function anagram(str1,str2){
    if(str1.length  != str2.length){
        return false;
    }
    if(str1 ==  str2){
        return true;
    }
    let map  = new Map();
    let map2 = new Map();
    for(let  char of str1){
        map.set(char, (map.get(char) || 0) + 1);
    }
    for(let char2 of str2){
        map2.set(char2, (map2.get(char2) || 0) + 1);
    }
    for(let [key,value ] of map2){
        for(let [key2,value2] of map){
            if(key == key2 && value == value2){
                return true;
            }
        }
    }
    return false;
}
console.log(anagram("silent","thauyb"));
// let str = "silent";
// let str2 = "listen";

// let map = new Map();
// let map2 = new Map();

// for(let char of str){
//     map.set(char , (map.get(char) || 0) + 1);
// }
// for(let char2 of str2){
//     map2.set(char2 ,(map2.get(char2) || 0) + 1);
// }

// if(map.has("e") && map.get("e") === 1){
//     console.log(true);
// }