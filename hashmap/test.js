let arr = [1,2,3,4,5,4,3,2,1];
  let map = new Map();
       arr.forEach((item) => {
        if(!map.has(item)){ 
            map.set(item , 1);
        }
        else{
            map.set(item , map.get(item) + 1);
        }
       })
    for(let [key ,value]  of  map){
        if(value  % 2 == 1){
            console.log(key);
        }
    }


