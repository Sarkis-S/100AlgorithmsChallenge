function isCaseInsensitivePalindrome(inputString: string): boolean {
  // Split the string into an array of letters
  // Use reverse method, then join letters
  // Finally, lowercase the letters and store in variable
  // Compare the inputString with the new variable
  // if they are the same return true, else false

  const compare = inputString.split('').reverse().join('').toLowerCase();

  return (compare === inputString.toLowerCase()) ? true : false;
}

// Another solution without reverse method
function isCaseInsensitivePalindrome(inputString: string): boolean {
  let newInput = inputString.split('').join('').toLowerCase();
  let compare: string[] = [];

  for (let i = 0; i < newInput.length; i++) {
    let current = newInput[i];
    compare.unshift(current);
  }

  return (newInput === compare.join('')) ? true : false;
}

console.log(isCaseInsensitivePalindrome('AaBaa')); // true
console.log(isCaseInsensitivePalindrome('abac')); // false