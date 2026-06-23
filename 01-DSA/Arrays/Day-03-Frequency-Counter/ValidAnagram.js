/*
Problem: Valid Anagram

Pattern: Frequency Counter

Approach: take two objects and store the strings values as key and the number of occuerances
then compare and check if both the objects has the same keys and same count values
if yes then return true if no then return undefined or we can say it's not an anagram

Dry Run:

Edge Cases: empty sting values, not equal length strings

Time Complexity: O(n)

Space Complexity: O(n)
*/

function validAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  if (str1.length !== str2.length) return false;

  for (let val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (let val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("anagram", "nagaram");
validAnagram("", "");
