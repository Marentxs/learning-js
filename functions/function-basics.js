// Write a function called capitalize that takes a string and returns that string
// with only the first letter capitalized. Make sure that it can take strings that
// are lowercase, UPPERCASE or BoTh.

function lower(text) {
  return text.toLowerCase();
}

function upper(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function capitalize(text) {
  return upper(lower(text));
}

console.log(capitalize("hELLo worlD"));

// Write a function called lastLetter that takes a string and returns the very last
// letter of that string:

function lastLetter(text) {
  return text[text.length - 1];
}

console.log("The last letter is = " + lastLetter("Hello World"));
