/**********************************************************
Topic: Function Clarity & Passing Data
**********************************************************/

// EXERCISE 1: Pass Instead of Hardcode
// Description: Write a function that calculates the total price given price and quantity.
// Don’t hardcode the values inside the function. Call it three times with different arguments.

function totalPrice(p, q) {
  return p * q;
}

console.log(totalPrice(30, 40)); // call #1
console.log(totalPrice(50, 10)); // call #2
console.log(totalPrice(12.5, 8)); // call #3

// EXERCISE 2: Single Responsibility
// Description: Write one function that gets a user’s name (return it),
// and another function that takes a name and greets the user.
// Call them so they work together without hardcoding.

function userName(n) {
  return "Your name is " + n;
}

function greeting(n) {
  return " - Hello " + n + " nice to meet you :)";
}

console.log(userName("Paul") + greeting("Paul"));

// EXERCISE 3: Reuse Functions
// Description: Write a function that squares a number.
// Write another function that sums two numbers, but call the squaring function inside it to square both before adding.

function sums(b, a) {
  function squares(c) {
    return c * c;
  }
  let squared = squares(a);
  return b + squared;
}

console.log(sums(2, 3));
