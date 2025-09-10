function  checkAnagram(str1,str2){
    if(str1.length !==  str2.length){
        return false;
    }
    let freq = new Map();
    let freq2 = new Map();
    for(let i = 0; i<str1.length; i++){
        if(!freq.has(str1[i])){
            freq.set(str1[i],1);
        }
        else{
            freq.set(str1[i],freq.get(str1[i]) + 1);
        }
    }
    for(let i = 0; i<str2.length; i++){
        if(!freq2.has(str2[i])){
            freq2.set(str2[i],1);
        }
        else{
            freq2.set(str2[i],freq2.get(str2[i]) + 1);
        }
    }
    for(let [key,value] of freq){
        if(!freq2.has(key) || freq2.get(key) !== value ){
            return false;
        }
    }
    return true;
}

console.log(checkAnagram("aabb","aabb"));
