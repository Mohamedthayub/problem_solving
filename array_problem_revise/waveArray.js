class Solution {
    sortInWave(arr) {
        // code here
        for(let i = 0; i<arr.length; i++){
            if(i % 2 != 0){
                let temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
            }
        }
    }
}
