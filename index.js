//Create an anonymous fucntion and set it equal to a variable.
let nums = [50, 100, 56, "String"];
let arr = ['Elocution', 21, 'Clean teeth', 100];

let timesThree = function(n) {
   if(typeof "" === 'string') {
   return "ARRR!"
   } else {
   return n * 3;
   }
};

let tripled = nums.map(timesThree);
let tripledTest = arr.map(timesThree);

console.log(nums);
console.log(tripled);
console.log(arr);
console.log(tripledTest);

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */



/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/


