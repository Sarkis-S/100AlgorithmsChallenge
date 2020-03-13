function alphabetSubsequence(s: string): boolean {
    // We need the alphabet to check the index of characters against
    // We need a counter for duplicate characters
    // We need to split the string into an array

    // Loop through the array
      // up the character count
      // if the index of current char is greather than the next
        // return false
      // if its a duplicate char
        // return false
    
    // All other case return true


  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 
    'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'];

  const noDups = {};
  const chars: string[] = s.split('');

  for (let i = 0; i < chars.length - 1; i++) {
    let current = chars[i];
    let next = chars[i+1];

    // handles dups by keeping count
    if (!noDups[current]) {
      noDups[current] = 1;
    } else {
      noDups[current]++;
    }

    // conditions for returning false
    if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
      return false;
    } else if (noDups[current] === 2) {
      return false;
    }
  }

  // otherwise return true
  return true;
}

// Slightly better solution
function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split('');
  const charValues: number[] = [];

  // The charCodeAt() method returns an integer between 0 and 65535
  // representing the UTF-16 code unit at the given index.
  chars.forEach((char: string) => {
    charValues.push(char.charCodeAt(0));
  });

  // The size accessor property returns the number of (unique) elements in a Set object.
  // In other words, size property will ignore duplicates.
  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  // Checks for characters that aren't exactly in ascending order
  for (let i = 0; i < charValues.length; i++) {
    if (charValues[i] >= charValues[i+1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence('zab')); // false
console.log(alphabetSubsequence('effg')); // false
console.log(alphabetSubsequence('cdce')); // false
console.log(alphabetSubsequence('ace')); // true
console.log(alphabetSubsequence('bxz')); // true
