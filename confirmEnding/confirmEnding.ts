function confirmEnding(str: string, target: string) {
  // Challenge states to use one of JavaScript substring methods

  // String.prototype.substr() is considered a legacy function and should be avoided when possible, therefore I won't be using it

  // String.prototype.substring() returns the string between start and end indexes, or the ending string

  // const str = 'Mozilla';
  // console.log(str.substring(1, 3)); // "oz"
  // console.log(str.substring(2)); // "zilla"

  // My Approach
  // Split str
  // Get target length

  // Loop through str
    // If the current character is equal to target at the first character
      // Take the substring at current character index to index + targetLength + 1
      // Here we'll compare the substring with the split target array
        // If everything checks out, return true
  // Exit the loop

  // Return false if no match found

  let splitStr = str.split('');
  let targetLength = target.length;

  for (let i = 0; i < splitStr.length; i++) {
    let currentCharacter = str[i];
    
    if (currentCharacter === target[0]) {
      let endSubstring = i + targetLength + 1

      if (str.substring(i, endSubstring) === target) {
        return true;
      }
    }
  }

  return false;
}

console.log(confirmEnding("Abstraction", "action")); // true
console.log(confirmEnding("Open sesame", "pen")); // false