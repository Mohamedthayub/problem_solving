 // 1 * 1 = 1
 // 2 * 2 = 4
 // 3 *  3 = 9 
 // 4 * 4  = 16

function findTheroot(n){
    for(let i = 1; i<=n; i++){
        let result = i* i;
        if(result == n){
            return i;
        }
        else if (result > n){
            let exit = i - 1;
            let value = exit * exit;
            let finalValue = Math.floor(value / exit);
            return finalValue;
        }
    }
}
console.log(findTheroot(11));