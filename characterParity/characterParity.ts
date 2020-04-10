function characterParity(symbol: string): string {
  // Okay so the first thing to note is that the inputs are strings and will need to be parsed
  // Create conditionals to return even, odd, or not a digit
  // It's important to remember NaN is of type number in JavaScript

  let parsed =  parseInt(symbol);
  console.log(parsed);
  if (isNaN(parsed)) {
    return 'not a digit';
  } else if (parsed % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

console.log(characterParity('5')); // odd
console.log(characterParity('8')); // even
console.log(characterParity('q')); // not a digit
