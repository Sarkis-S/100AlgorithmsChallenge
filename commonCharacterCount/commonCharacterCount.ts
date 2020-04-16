function commonCharacterCount(s1: string, s2: string): number {
  // Initialize new string variable to split s1 and store array
  // Repeat for s2
  // Initialize commonCharacter variable to zero

  // Create an tracker object to store s2's count of characters
  // Use loops to accomplish this

  // Loop through s1 array
    // For the current element
      // Does the tracker have that element?
        // If yes, up count
        // Lower the count in the tracker for said character
  
  // Return commonCharacter

  const string1 = s1.split('');
  const string2 = s2.split('');
  let commonCharacters = 0;

  let tracker = {}

  for (let i = 0; i < string2.length; i++) {
    if (!tracker[string2[i]]) {
      tracker[string2[i]] = 1;
    } else {
      tracker[string2[i]]++;
    }
  }

  for (let j = 0; j < string1.length; j++) {
    let current = string1[j];

    if (tracker.hasOwnProperty(current) && tracker[current] > 0) {
      commonCharacters++;
      tracker[current]--;
    }
  }

  return commonCharacters;
}

console.log(commonCharacterCount('aabcc', 'adcaa')); // 3
console.log(commonCharacterCount('adcaa', 'aabcc')); // 3