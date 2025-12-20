function maxSubarraySum(arr, k) {
  // Step 1: calculate the first window sum
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  // Step 2: set initial max
  let maxSum = windowSum;

  // Step 3: slide the window
  for (let right = k; right < arr.length; right++) {
    // add the new element
    windowSum += arr[right];

    // remove the element going out
    windowSum -= arr[right - k];
    console.log(windowSum,maxSum);
    // update max
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 2));
