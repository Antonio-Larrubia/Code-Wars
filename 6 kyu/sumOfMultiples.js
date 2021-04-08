// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function solution(number){
  var sum = 0;
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

function findOdd(arr) {
  console.table(arr.sort((a,b) => a - b))
  
  let i = 0
  let sum = 0;
  if (arr.length === 1) 
    return arr[i]
  while (i < arr.length) {
    if (arr[i] === arr[i+1])
      sum++
    i++
  }
  if (sum % 2 != 0) return arr[i-1]
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))

