/*
Day: 3

Problem: Linear Search


Approach: loop through the array and check if the current array element is matching the target elemnt if matched then return true

Time Complexity: O(n)

Space Complexity: O(1)

*/

function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false
}

findElement([1, 2, 3], 2);

findElement([], 2);

findElement([5], 5);

findElement([-5, -8], -8);

findElement([10, 20], 100);
