//Create an array styles with items “Jazz” and “Blues”.
//Append “Rock-n-Roll” to the end.
//Replace the value in the middle with “Classics”. Your code for finding the middle value
//should work for any arrays with odd length.
//Strip off the first value of the array and show it.
//Prepend Rap and Reggae to the array.

let genres = ["Jazz", "Blues"];
genres.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
genres.shift();
genres.unshift("Rap", "Reggae");

//Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("A number please?", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());
