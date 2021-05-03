// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
  for(let i = 0; i < b.length; i++) {
    for (let j = 0; j <= a.length; j++) {
        while (a[j] === b[i]) {
            a.splice(j,1);
        }
    }
  }
  return a;
}

console.log(arrayDiff([], [4,5])) //[] "a was [], b was [4,5]
console.log(arrayDiff([3,4], [3])) // [4] "a was [3,4], b was [3]"
console.log(arrayDiff([1,8,2], [])) // [1,8,2], "a was [1,8,2], b was []"
console.log(arrayDiff([1,2,3], [1,2])) // [3], "a was [1,2,3], b was [1,2]
console.log(arrayDiff([1,2,2], [2]))

//Better version

function array_diff2(a, b) {
    return a.filter(e => !b.includes(e));
  }