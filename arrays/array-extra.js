// EXERCISE 0: Convert snake_case to camelCase
// Description:
//  - Write a function snakeToCamel(str) that converts snake_case words into camelCase format.
//  - The first word stays lowercase, and each following word starts with an uppercase letter.
//  - Underscores are removed in the process.
//
// Examples:
//  snakeToCamel("hello_world") == "helloWorld"
//  snakeToCamel("make_javascript_fun") == "makeJavascriptFun"
//  snakeToCamel("convert_this_string") == "convertThisString"
//
// Hint: Use .split("_") to split the string, transform each part, and then .join("").

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

// EXERCISE 2: Filter prices in place
// Description:
//  - Write a function filterPricesInPlace(prices, min, max) that takes an array of prices.
//  - It should remove all elements that are not between min and max (inclusive).
//  - The function should modify the array directly and not return anything.
//
// Example:
//  let prices = [120, 50, 300, 80, 25];
//  filterPricesInPlace(prices, 50, 150);
//  console.log(prices); // [120, 50, 80]

// EXERCISE 3: Sort ages in descending order
// Description:
//  - You have an array of ages. Write code to sort the array in decreasing order.
//  - The sorting should modify the array.
//
// Example:
//  let ages = [21, 45, 18, 60, 35];
//  // your code here
//  console.log(ages); // [60, 45, 35, 21, 18]

// EXERCISE 4: Copy and sort names
// Description:
//  - Write a function copySortedNames(names) that creates a sorted copy of an array of strings.
//  - The original array must remain unchanged.
//
// Example:
//  let names = ["Zoe", "Alice", "Mike"];
//  let sorted = copySortedNames(names);
//  console.log(sorted); // ["Alice", "Mike", "Zoe"]
//  console.log(names);  // ["Zoe", "Alice", "Mike"] (unchanged)

// EXERCISE 5: Shuffle deck
// Description:
//  - Write a function shuffle(deck) that randomly reorders the elements of an array.
//  - Each possible ordering should have an equal probability.
//
// Example:
//  let deck = ["Ace", "King", "Queen"];
//  shuffle(deck);
//  console.log(deck); // e.g. ["Queen", "Ace", "King"] (different each run)

// EXERCISE 6: Unique words
// Description:
//  - Write a function uniqueWords(words) that returns a new array with only the unique values from the given array.
//  - The order of the first occurrence should be preserved.
//
// Example:
//  let words = ["apple", "banana", "apple", "orange", "banana", "grape"];
//  console.log(uniqueWords(words)); // ["apple", "banana", "orange", "grape"]
