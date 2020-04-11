function checkPalindrome(inputString: string): boolean {
  // Game Plan

  // Since no upper or lower case is used in the check, no need for .toLowerCase();
  // Create new copy array (because I don't like mutating things)

  // Loop through newArray
    // shift off the front and back element of array
      // do they match?
        // if not, return false
      // we have to consider when 1 element is left and deal with it 
      // Proceed with loop until finished
    // return true if no no mismatch found

  let reversed = inputString.split('').reverse();

  let shifted = '';
  let popped = '';

  for (let i = 0; i < reversed.length; i++) {
    shifted = reversed.shift();
    popped = reversed.pop();

    if (shifted && popped === undefined) {
      return true;
    }

    if (shifted !== popped) {
      return false;
    }

    return true;
  }
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
