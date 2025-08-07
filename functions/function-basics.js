// Write a function called add7 that takes one number and returns that number + 7.

function add7(n) {
  return n + 7;
}

console.log(add7(4));

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(a, b) {
  return a * b;
}
console.log(multiply(10, 2));

// Write a function called capitalize that takes a string and returns that string
// with only the first letter capitalized. Make sure that it can take strings that
// are lowercase, UPPERCASE or BoTh.

let userInput = prompt("Enter text, console will capitalize first letter.");

function lower(text) {
  return text.toLowerCase();
}

function upper(text) {
  return text[0].toUpperCase() + text.slice(1);
}

let capitalize = upper(lower(userInput));

console.log(capitalize);

// Write a function called lastLetter that takes a string and returns the very last
// letter of that string:

let input = prompt("Enter string, console will give last character.");

function last(text) {
  return text[text.length - 1];
}

let lastLetter = last(input);

console.log(lastLetter);
