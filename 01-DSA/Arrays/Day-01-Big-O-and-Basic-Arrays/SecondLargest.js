/*
Day: 2

Problem:
Find the Second Largest Element in an Array

Approach:

Take two variables and keep the first element in largest and in other variable keep the -Infinity as initial value and then run the loop and 
check if the current array element is greater than the current largest value 
if yes then first store it in second largest variable and then replace the largest value with the current elemt of array as it is greater 
then if the current array element is lesser than the value of the largest variable then to chcke if the current array element is greater then the second largest variable 
and if yes then replace it with second largest variable else return the second largest 

Time Complexity: O(n)

Space Complexity: O(1)
*/

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  if (arr.length >= 2) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    if (secondLargest === -Infinity) return undefined;
  } else {
    return undefined;
  }
  return secondLargest;
}

// findSecondLargest([-12, -16, 8, -27, -39]);

findSecondLargest([10, 10, 10]);

// findSecondLargest([5]);

// findSecondLargest([]);

// findSecondLargest([-5, -2, -9]);

// findSecondLargest([100, 90]);
