function differentSymbolsNaive(s: string): number {
  // We are counting the number of characters, excluding dups. Seems easy enough.

  // Initiate a count variable to zero
  // I'll use a char object to store characters
  // Create new string array using split()

  // Loop through the string array
    // If the object does not include the character
      // add it to the object and up the count
    // otherwise don't do anything
  
  // Return the count

  let count = 0;
  let char = {}
  let strArray = s.split('');

  strArray.forEach((character) => {
    if (!char[character]) {
      char[character] = 1;
      count++;
    }
  });
  
  return count;
}

console.log(differentSymbolsNaive('cabca')); // 3
