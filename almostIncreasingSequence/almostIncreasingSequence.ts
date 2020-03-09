function almostIncreasingSequence(sequence: number[]): boolean {
  // We need to keep count of errors

  // Iterate through array
  // Compare current with previous if smaller
    // Increment count
  // Compare current with pre-previous AND next with prevous
    // Return false
  
  // Return errors less than or equal to 1

  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    let current = sequence[i];
    let prev = sequence[i-1];
    let next = sequence[i+1];

    if (current <= prev) {
      count++;
      if (current <= sequence[i-2] && next <= prev) {
        return false;
      }
    }
  }
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) // false
console.log(almostIncreasingSequence([1, 3, 2])) // true