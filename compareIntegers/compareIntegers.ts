function compareIntegers(a: string, b: string): string {
  // Simple enough problem

    // if a is equal to b
      // return equal

    // if a > b
      // return greater

    // return less
    
  const parsedA = parseInt(a);
  const parsedB = parseInt(b);

  if (parsedA === parsedB) return 'equal';
  if (parsedA > parsedB) return 'greater';
  return 'less';
}

console.log(compareIntegers('12', '13')); // less
console.log(compareIntegers('875', '799')); // greater
console.log(compareIntegers('1000', '1000')); // equal
