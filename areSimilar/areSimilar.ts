function areSimilar(a: number[], b: number[]): boolean {
  // Sort out the array
  // Two identical arrays would NOT be equal since they both exist in separate spaces in memory
  // We can stringify the values and compare

  // let newA = a.sort().toString();
  // let newB = b.sort().toString();
  // return newA === newB;

  // Refactored from above
  // return (a.sort().toString() === b.sort().toString());

  // Let's play with actual swapping shall we
  const tempC: number[] = [];
  let tempD: number[] = [];

  if (a.toString() === b.toString()) {
    return true;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      tempC.push(a[i]);
      tempD.push(b[i]);
    }
  }

  tempD.reverse();
  console.log(tempD);

  if ((tempC.length === 2) && (tempC.toString() === tempD.toString())) {
    return true;
  }

  return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3])); // true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); // true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); // false
