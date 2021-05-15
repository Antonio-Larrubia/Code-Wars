// Mapping an array of numbers to an array of square roots

// The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.

let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// Using map to reformat objects in an array

// The following code takes an array of objects and creates a new array containing the newly reformatted objects.

let kvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
    let rObj = {}
    rObj[obj.key] = obj.value
    return rObj
})

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

//Mapping an array of numbers using a function containing an argument

//The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as map loops through the original array.

let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]