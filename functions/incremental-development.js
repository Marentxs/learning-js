/**********************************************************
Topic: Incremental Development
**********************************************************/

// EXERCISE 1: Build in Steps
// Description: Write a function that builds a string step-by-step.
// First return “Hello”, test it. Then return “Hello World”, test it. Then “Hello World!”

function steps() {
  let greeting = "Hello";
  greeting += " World";
  greeting += "!";

  return greeting;
}

console.log(steps());

// EXERCISE 2: Debug Early
// Description: Create a function that sums an array of numbers.
// Intentionally insert a bug, then log intermediate steps to find it.
// (Hint: log variables inside your loop.)

// EXERCISE 3: Test as You Go
// Description: Write a function to reverse a string.
// Test it with partial inputs (“he”, “hel”, “hello”) before the full implementation.

function reverse(str) {
  let splitString = str.split("");
  console.log(splitString);

  let reverseArray = splitString.reverse();
  console.log(reverseArray);

  let joinArray = reverseArray.join();
  console.log(joinArray);
}

console.log(reverse("hello"));
