/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
// 1. takes a start and an end
// 2. return an array of all numbers in that range
// 3. if the end number is less than the start, return an empty array

function range(start, end, arr = []) {
  if (start >= end) {
    return arr;
  }
  
  arr.unshift(end - 1);
  return range(start, end - 1, arr)
}



// function range(start, end) {
//   debugger
//   if (end <= start) return [];
//   debugger
//   return [start, ...range(start + 1, end)]
// }

// function range(start, end, arr = []) {
//   if (end <= start) {
//     return arr;
//   }
//   arr.push(start)
//   let num = start + 1
//   return range(num, end, arr)
// }

// function range(start, end) {
//   if (start >= end) {
//     return [];
//   }
//   return [start, ...range(start + 1, end)]
// }

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
