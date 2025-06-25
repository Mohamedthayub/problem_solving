def largestElement(arr):
    largest = arr[0]
    for i in arr:
        if(i > largest):
            largest = i
        
    return largest

print(largestElement([1,2,3,4,5]))