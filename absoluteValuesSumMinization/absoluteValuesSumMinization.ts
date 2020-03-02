function absoluteValuesSumMinimization(a: number[]): number {
  // Check if array length is even or odd

  // If array length is even
    // return length at medium using division then minus 1
  // If length is odd 
    // return length using division and Math.floor()

  if (a.length % 2 === 0) {
    return a[a.length / 2 - 1];
  } else {
    return a[Math.floor(a.length / 2)];
  }

  // Simplified solution:
  const isLengthEven = a.length % 2 === 0;
  return (isLengthEven) ? (a[a.length / 2 - 1]) : (a[Math.floor(a.length / 2)]);
}

console.log(absoluteValuesSumMinimization([2, 4, 7])); // 4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6])); // 4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6])); // 7
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])); // 7