function candies(n: number, m: number): number {
  // n = children, m = pieces of candy
  // We take the number of candies (m) divide that by number of children (n)
  // We need to use Math.floor to round the answer down
  // We take the output and multiply it by n

  let numOfCandies = Math.floor(m/n);
  return numOfCandies * n;
}

console.log(candies(3, 10)); // 9
console.log(candies(4, 17)); // 16