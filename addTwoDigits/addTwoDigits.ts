function addTwoDigits(n: any): number {
  // Turn n into string then split into array
  // Use higher order function reduce to tally up
    // We will need to parse the number string

  let numArray = n.toString().split('');

  return numArray.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(29));