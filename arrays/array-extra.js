// EXERCISE 0: Convert snake_case to camelCase
// Description:
//  - Write a function snakeToCamel(str) that converts snake_case words into camelCase format.
//  - The first word stays lowercase, and each following word starts with an uppercase letter.
//  - Underscores are removed in the process.
//
// Example: snakeToCamel("hello_world") == "helloWorld"
// Hint: Use .split("_") to split the string, transform each part, and then .join("").

function snakeToCamel(str) {
  let arr = str.split("_");

  for (let i = 1; i < array.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join("");
}

// EXERCISE 1: Filter scores in a range
// Description:
//  - Write a function filterScores(scores, min, max) that takes an array of numbers.
//  - It should return a new array containing only the scores between min and max (inclusive).
//  - The original array must not be modified.
//
// Example:
//  let scores = [95, 40, 82, 67, 29];
//  let filtered = filterScores(scores, 50, 90);
//  console.log(filtered); // [82, 67]
//  console.log(scores);   // [95, 40, 82, 67, 29] (unchanged)

function filterScores(scores, min, max) {
  let minVal = Math.min(...scores);
  let maxVal = Math.max(...scores);

  let filtered = scores.filter((num) => {
    return num === minVal || num === maxVal;
  });

  return filtered; // returns a new array
}

// EXERCISE 2: Filter prices in place
// Description:
//  - Write a function filterPricesInPlace(prices, min, max) that takes an array of prices.
//  - It should remove all elements that are not between min and max (inclusive).
//  - The function should modify the array directly and not return anything.
//

function filterPricesInPlace(prices, min, max) {
  const filtered = prices.filter((num) => num >= min && num <= max);

  prices.length = 0;
  prices.push(...filtered);
}

const prices = [10, 20, 30, 40, 50];
console.log("Before:", prices);

filterPricesInPlace(prices, 30, 45);
console.log("After:", prices);

// EXERCISE 3: Sort ages in descending order
// Description:
//  - You have an array of ages. Write code to sort the array in decreasing order.
//  - The sorting should modify the array.

let ages = [21, 45, 18, 60, 35];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

ages.sort(compareNumeric); // Sort in order
ages.reverse(); // Reverse order
console.log("The array in reverse order is", ages); // [60, 45, 35, 21, 18]

// EXERCISE 4: Copy and sort names
// Description:
//  - Write a function copySortedNames(names) that creates a sorted copy of an array of strings.
//  - The original array must remain unchanged.

function copySortedNames(names) {
  return names.slice().sort();
}

let people = ["Zoe", "Alice", "Mike"];
let sortedPeople = copySortedNames(people);

console.log(sortedPeople); // ["Alice", "Mike", "Zoe"]
console.log(people); // ["Zoe", "Alice", "Mike"] (unchanged)

// EXERCISE 5: Shuffle deck
// Description:
//  - Write a function shuffle(deck) that randomly reorders the elements of an array.
//  - Each possible ordering should have an equal probability.

let deck = ["Ace", "King", "Queen"];

function shuffle(deck) {
  let result = [];
  let copy = arr.slice(); // don’t destroy original

  while (copy.length > 0) {
    let randomIndex = Math.floor(Math.random() * copy.length);
    result.push(copy[randomIndex]);
    copy.splice(randomIndex, 1);
  }

  return result;
}

shuffle(deck);
console.log(deck); // ["Queen", "Ace", "King"] (different each run)

// EXERCISE 6: Unique words
// Description:
//  - Write a function uniqueWords(words) that returns a new array with only the unique values from the given array.
//  - The order of the first occurrence should be preserved.
//

let words = ["apple", "banana", "apple", "orange", "banana", "grape"];

function uniqueWords(words) {
  return words.filter((item, index) => words.indexOf(item) === index);
}

console.log(uniqueWords(words)); // ["apple", "banana", "orange", "grape"]
