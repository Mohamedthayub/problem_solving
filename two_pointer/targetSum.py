def findTargetSum(arr,target):
    for i  in range(len(arr)):
        for  j in range(i+1,len(arr)):
            if(arr[i] +arr[j] == target):
                return True
            
    return False


result = findTargetSum([1,2,3,4,5],10)
print(result);

