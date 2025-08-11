/**********************************************************
 Topic: Function Declarations vs Expressions
**********************************************************/

// EXERCISE 1: Rewrite a Function Declaration as an Expression
// Description: Rewrite greet as a function expression.
// Call the function and log the result with your name.

(function greet(name) {
  return "Hello, " + name + "!";
});

let greet = function (name) {
  return "Hello, " + name + "!";
};

console.log(greet("Any Name"));

// EXERCISE 2: Hoisting Behavior
// Description: Try calling the function before its definition.
// Do it for both a function declaration and a function expression.
// Explain why square works but double does not.

console.log(square(4));

function square(x) {
  return x * x;
}

/*square works because it is a function declaration, which means it has
hoisted behaviour, we can call the function before defining, and it is defined
in memory early. this doesn't happen with Double, because it is a function
expression, it is not hoisted, we can't call it before defining and is not defined
early in the memory */

const double = function (x) {
  return x * 2;
};

// EXERCISE 3: Conditional Function Assignment
// Description: Use a function expression to assign a function based on a condition.
// Change isMorning to false and run the code again.
// Try rewriting this using two function declarations instead. What happens? Can you switch between them?

let isMorning1 = false;

let salute1;

if (isMorning1) {
  salute1 = function () {
    return "Good morning!";
  };
} else {
  salute1 = function () {
    return "Good evening!";
  };
}
console.log(salute1());

//

function salute() {
  return "Good morning!";
}

function salute() {
  return "Good evening!";
}

let isMorning = true;

console.log(salute());
