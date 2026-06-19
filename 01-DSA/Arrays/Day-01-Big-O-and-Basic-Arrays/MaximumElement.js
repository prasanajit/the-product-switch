/*
Day: 2

Problem:
Find Maximum Element in an Array

Approach: First take a variable inside a funtion to store the first elemnt of the array and 
then loop throught the entire array and then compare if the array items are greater than the variable stored and 
then if it is greater then replace it with the new array item and at the end return that 

Time Complexity: O(n)

Space Complexity: O(1)

correction reason - it's because we are only storing one value in the array not the full array

*/

function findMaxElement(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

findMaxElement([1, 2, 3, 4, 5]);
