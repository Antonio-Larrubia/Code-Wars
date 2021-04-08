// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  return (n >= 10) ? Number(n.toString().split("").sort((a,b)=>a<b).join("")) : n
}

console.log(descendingOrder(1))
console.log(descendingOrder(123456789))
console.log(descendingOrder(0112)) //weird result.