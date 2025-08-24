// EXERCISE 1: Styles Array
// Description: Create an array styles with items “Jazz” and “Blues”.
//  - Append “Rock-n-Roll” to the end.
//  - Replace the value in the middle with “Classics”.
//    (Your code for finding the middle value should work for any odd-length array.)
//  - Strip off the first value of the array and display it.
//  - Prepend “Rap” and “Reggae” to the array.

let genres = ["Jazz", "Blues"];

genres.push("Rock-n-Roll");
genres[Math.floor((genres.length - 1) / 2)] = "Classics";
genres.shift();
genres.unshift("Rap", "Reggae");

// EXERCISE 2: Even Numbers Filter
// Description:
//  - Create an array with at least 7 numbers of your choice.
//  - Loop through the array and collect only the even numbers into a new array.
//  - Display both the original array and the new array of even numbers.
// Hint: Use the modulus operator (%) to check if a number is even.

let number = [21, 22, 23, 24, 25, 26, 27];
let evenNumber = [];

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    evenNumber.push(number[i]);
  }
}

console.log(number);
console.log(evenNumber);

// EXERCISE 3: Sum Input
// Description: Write the function sumInput() that:
//  - Asks the user for values using prompt and stores them in an array.
//  - Stops asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
//  - Calculates and returns the sum of array items.
// Note: A zero (0) is a valid number; do not stop on zero.

function sumInput() {
  let values = [];

  while (true) {
    let input = prompt("Enter a number for the sum");

    if (input === null || input.trim() === "" || isNaN(Number(input))) {
      break;
    }

    values.push(Number(input));
  }

  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }

  console.log("The sum is:", sum);
  return sum;
}

sumInput();

// EXERCISE 4: Average of Positive Numbers
// Description:
//  - Create an array with at least 8 numbers (include both positive and negative values).
//  - Loop through the array and collect only the positive numbers into a new array.
//  - Calculate the average of those positive numbers.
//  - Display both the new array and the calculated average.
// Hint: The average is the sum of the numbers divided by how many numbers there are.

let mixed = [4, -3, 5, -6, 8, -7, 2, -1];
let positive = [];

for (let i = 0; i < mixed.length; i++) {
  if (mixed[i] > 0) {
    positive.push(mixed[i]);
  }
}

let sum = 0;
for (let i = 0; i < positive.length; i++) {
  sum += positive[i];
}

let average = sum / positive.length;

console.log("The positive numbers are", positive);
console.log("The average is:", average);
