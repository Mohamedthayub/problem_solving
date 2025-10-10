function  checkEqualArrays(arr,arr2){
   if(arr.length != arr2.length){
      return false;
   }
   arr.sort((a,b) => a - b);
   arr2.sort((a,b) => a - b)
   for(let i = 0; i<arr.length; i++){
      if(arr[i] != arr2[i]){
         return false;
      }
   }
   return true;

}
console.log(checkEqualArrays([5,1,3,2],[5,1,2,3]));
