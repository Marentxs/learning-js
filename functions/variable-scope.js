/**********************************************************
Topic: Variable Scope & Persistence
**********************************************************/

// EXERCISE 1: Local vs Global Variables
// Description: Create a global counter variable.
// Write a function that increases the counter by 1 each time it’s called, and log the counter.
// Call the function three times.
// Question: Does the value persist between calls? Why?

let counter = 1; // global variable

function increases() {
  counter = counter + 1;
  return counter;
}

console.log(increases()); // 2
console.log(increases()); // 3
console.log(increases()); // 4

// Value does persists because counter is a global variable and each call
// modifies the same value in the global scope

function increasesLocal() {
  let counter = 1; // local variable
  counter = counter + 1;
  return counter;
}

console.log(increasesLocal()); // 2
console.log(increasesLocal()); // 2

// 🧪 EXERCISE 2: Function Scope Reset
// Description: Create a function that declares a score variable inside it and adds 10 each time it runs.
// Call it three times and observe if the value resets or persists.
// Question: Why does it behave that way?

function local() {
  let counter = 1; // local variable
  counter = counter + 10;
  return counter;
}

console.log(local()); // 11
console.log(local()); // 11

// Value does NOT persist because counter is recreated each time from scratch as the function says

// 🧪 EXERCISE 3: Moving Variables for Persistence
// Description: Modify Exercise 2 so the score persists between calls without using a global variable.
// (Hint: declare the variable outside the function but still in the same file.)

function outside() {
  let persistence = 5;

  function inside() {
    persistence = persistence + 10;
    return persistence;
  }
  return inside;
}

let score = outside();

console.log(score()); // 15
console.log(score()); // 25
