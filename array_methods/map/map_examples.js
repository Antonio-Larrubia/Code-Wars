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
