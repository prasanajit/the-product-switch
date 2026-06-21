/*
Day: 3

Problem: Count Occurance


Approach: Take a variable and store 0 initially inside funtion
then run the loop and check if current array element is matching the target
if yes the increase the counter by 1 if not then do nothing and at the end return the counter

Time Complexity: O(n)

Space Complexity: O(1)

*/

function countOccurance(arr, target) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      counter += 1;
    }
  }
  return counter;
}
