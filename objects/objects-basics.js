/**********************************************************
Topic: Objects in JavaScript
**********************************************************/

// EXERCISE 1: Hello, object
// Description:
// 1. Create an empty object user.
// 2. Add the property name with the value "John".
// 3. Add the property surname with the value "Smith".
// 4. Change the value of name to "Pete".
// 5. Remove the property name from the object.

let user = {};
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// EXERCISE 2: Check for emptiness
// Description:
// Write a function isEmpty(obj) which returns true
// if the object has no properties, and false otherwise.

function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}

// Test cases
let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

// EXERCISE 3: Sum object properties
// Description:
// Given an object salaries with numeric values, write the code to sum all salaries and store the result in the variable sum.
// If salaries is empty, the result must be 0.

// EXERCISE 4: Multiply numeric property values by 2
// Description:
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// It should modify the object in-place.
// Use typeof to check if a property value is a number.

// Test case
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu); // { width: 400, height: 600, title: "My menu" }
