/*
Day: 3

Problem: Find Index


Approach: loop through the array and check if the current array element is matching the target elemnt if matched then return the index else -1 

Time Complexity: O(n)

Space Complexity: O(1)

*/

function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
