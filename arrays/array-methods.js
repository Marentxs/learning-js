/**********************************************************
Topic: Strings & Array Filtering
**********************************************************/

// EXERCISE 1: Camelize String
// Description:
//  - Write the function camelize(str) that changes dash-separated words
//  - That is: remove all dashes, and capitalize each word after a dash.
// Example: camelize("border-left-width") → "borderLeftWidth"
// Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
  let arr = str.split("-");

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  return arr.join("");
}

console.log("The word camelized is:", camelize("list-style-image"));

// EXERCISE 2: Filter Range
// Description:
//  - Write a function filterRange(arr, a, b) that gets an array arr.
//  - It should return a new array with values >= a and <= b.
//  - The original array must not be modified.

let range = [1, 5, 7, 9];
let a = 5;
let b = 9;

let filterRange = range.filter(function (value) {
  return value >= a && value <= b;
});

console.log("The numbers in range are:", filterRange); // 5 - 7 - 9

// EXERCISE 3: Filter Range In Place
// Description:
//  - Write a function filterRangeInPlace(arr, a, b) that gets an array arr.
//  - Remove from arr all values except those between a and b (inclusive).
//  - The function should only modify the array in place.
//  - It should not return anything.

let inPlace = [6, 4, 9, 2];
let c = 2;
let d = 5;

for (let i = 0; i < inPlace.length; i++) {
  let value = inPlace[i];

  if (value < c || value > d) {
    // conditions not met
    inPlace.splice(i, 1); // remove element at index i
    i--; // step back one index since array got shorter
  }
}

console.log("Your new array is:", inPlace); // 2 - 4

// EXERCISE 4: Sort in Decreasing Order
// Description:
//  - You have an array of numbers.
//  - Sort the array in decreasing order (largest → smallest).
//  - The original array should be modified in place.

let arrDecrease = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert(arr); // 8, 5, 2, 1, -10

// EXERCISE 5: Copy and Sort Array
// Description:
//  - Create a function copySorted(arr) that returns a sorted copy of an array of strings.
//  - The original array must remain unmodified.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

// EXERCISE 6: Extract Names from User Objects
// Description:
//  - You have an array of user objects, each with a name and age property.
//  - Write code that converts it into an array of names only.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names =
  /* ... your code */

  alert(names); // John, Pete, Mary
