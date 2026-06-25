/*
Problem: Count unique Values in Array

Pattern: Two Pointer

Approach: take two variables from the starting of the array's 1st and 2nd position then compare if the values are equal 
if yes then keep the 1st position in the same place and increase the 2nd position and 
again check if the values are not equal the increase the 1st positon by +1 and then replace that value with the end positon
and then increase the end position until it matches the array's length

Dry Run

Edge Cases: 

empty array
single element
all duplicates
all unique
negative numbers

Time Complexity: O(n)

Space Complexity: O(1)
*/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let start = 0;
  let end = 1;

  while (end < arr.length) {
    if (arr[start] === arr[end]) {
      end += 1;
    } else {
      start += 1;
      arr[start] = arr[end];
      end += 1;
    }
  }

  return start + 1;
}
