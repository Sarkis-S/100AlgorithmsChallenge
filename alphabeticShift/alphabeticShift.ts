function alphabeticShift(inputString: string): string {
  // Create an alphabet variable with all letters
  // Create characterArray that splits and stores inputString

  // Iterate through the characterArray
    // Match it against our alphabet object
      // Push next character into an output array
      
  // return the output array

  let alphabet = {
    'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e',
    'e': 'f', 'f': 'g', 'h': 'i', 'i': 'j',
    'j': 'k', 'k': 'l', 'l': 'm', 'm': 'n',
    'n': 'o', 'o': 'p', 'p': 'q', 'q': 'r',
    'r': 's', 's': 't', 't': 'u', 'u': 'v',
    'v': 'w', 'w': 'x', 'y': 'z', 'z': 'a'
  }

  let characterArray = inputString.split('');
  let output = [];

  for (let i = 0; i < characterArray.length; i++) {
    let current = characterArray[i];

    if (alphabet.hasOwnProperty(current)) {
      output.push(alphabet[current]);
    }
  }

  return output.join('');
}

console.log(alphabeticShift('crazy'));