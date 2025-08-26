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

function decreaseNumeric(a, b) {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
}

arrDecrease.sort(decreaseNumeric);
console.log(arrDecrease); // [8, 5, 2, 1, -10]

// EXERCISE 5: Copy and Sort Array
// Description:
//  - Create a function copySorted(arr) that returns a sorted copy of an array.
//  - The original array must remain unmodified.

let arrFundamentals = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort((a, b) => a.localeCompare(b)); //slice() creates copy
}

let sorted = copySorted(arrFundamentals);

console.log(arrFundamentals); // HTML, JavaScript, CSS (no changes)
console.log(sorted); // CSS, HTML, JavaScript

// EXERCISE 6: Extract Names from User Objects
// Description:
//  - You have an array of user objects, each with a name and age property.
//  - Write code that converts it into an array of names only.

let alice = { name: "Alice", age: 22 };
let bob = { name: "Bob", age: 27 };
let charlie = { name: "Charlie", age: 31 };

let users = [alice, bob, charlie];

let names = users.map(function (user) {
  return user.name;
});

console.log(names); // Alice, Bob, Charlie

// EXERCISE 7: Map to Objects
// Description:
//  - You have an array of user objects, each with name, surname, and id.
//  - Create a new array of objects containing { id, fullName }.
//  - fullName should be generated from name + surname.
//  - Use map() with arrow functions.
//  - The original array should remain unchanged.

let anna = { name: "Anna", surname: "Lopez", id: 1 };
let mark = { name: "Mark", surname: "Johnson", id: 2 };
let sofia = { name: "Sofia", surname: "Khan", id: 3 };

let users = [anna, mark, sofia];

let usersMapped =
  /* ... your code ... */

  // Expected result:
  // [
  //   { fullName: "Anna Lopez", id: 1 },
  //   { fullName: "Mark Johnson", id: 2 },
  //   { fullName: "Sofia Khan", id: 3 }
  // ]

  console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Anna Lopez

// EXERCISE 8: Sort Users by Age
// Description:
//  - Write a function sortByAge(users).
//  - It should sort an array of objects by their age property, in ascending order.
//  - The array should be modified in place.

let lucas = { name: "Lucas", age: 25 };
let emma = { name: "Emma", age: 30 };
let noah = { name: "Noah", age: 28 };

let arr = [emma, lucas, noah];

sortByAge(arr);

console.log(arr[0].name); // Lucas
console.log(arr[1].name); // Noah
console.log(arr[2].name); // Emma

// EXERCISE 9: Shuffle an Array
// Description:
//  - Write a function shuffle(array) that randomly reorders elements of the array.
//  - Each possible order should have equal probability.
//  - The array should be modified in place.

let arrRandom = [1, 2, 3];

shuffle(arr);
console.log(arr); // Could be [3,2,1], [2,1,3], [1,3,2], etc.
