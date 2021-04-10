// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

function twoSum(numbers, target) {
  let res = []
  numbers.sort();
  let i = 0;
  let j = 1;
  while (res.length == 0 && numbers[i] <= target) {
    while (res.length == 0 && numbers[j] <= target) {
      if(numbers[i] + numbers[j] === target) {
        res.push(i)
        res.push(j)
      }
      j++
    }
    i++;
  }
  return res;
}

console.log(twoSum([1,2,3], 4)) //[0,2]
console.log(twoSum([1234,5678,9012], 14690)) // [1,2]
console.log(twoSum([2,2,3], 4)) //[0,1]