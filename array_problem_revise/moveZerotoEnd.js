class Solution {
    pushZerosToEnd(arr) {
        // code here
        let temp = [];
        for(let i = 0; i<arr.length; i++){
            if(arr[i] != 0){
                temp.push(arr[i]);
            }
        }
        for(let j = temp.length; j<arr.length; j++){
            temp.push(0);
        }
        for(let k = 0; k<temp.length; k++){
            arr[k] = temp[k];
        }
        
    }
}