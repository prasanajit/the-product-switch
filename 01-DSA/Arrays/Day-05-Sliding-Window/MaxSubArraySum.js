/*
Problem: Max Sub Array

Pattern: Sliding Window

Approach: Take a function where array and a number as a parameter and take two varibales where we store the current count and a max count
then we have to run the loop till the number given and store the sum in temp and max both
then we run another loop where we start from the number given and then till the array ends
then we substract the 1st element from the sum and add the next elemnt and compare which one is bigger
if current is bigger then we replace the max with current and if not then we go the next element and do the same till array ends

Dry Run

Edge Cases: if the number given is bigger than the array length

Time Complexity: O(n)

Space Complexity: O(1)
*/

function maxSubarraySum(arr, num) {
  if (num > arr.length) return undefined;
  let curr = 0;
  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  curr = max;
  for (let i = num; i < arr.length; i++) {
    curr = curr - arr[i - num] + arr[i];
    max = Math.max(curr, max);
  }
  return max;
}

maxSubarraySum([99, 53, 9, 13, 18, 4, 90, 23, 67, 43, 65], 4);
