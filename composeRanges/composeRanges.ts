function composeRanges(nums: number[]): string[] {
  // We're taking a sorted array of number ranges then outputing all ranges

  // start varaible
  // output variable

  // loop through the array
    // if the next element is equal to current element + 1
      // push that current element into start variable
    // else if it isn't the case then 
      // push to output "${start[0]} -> ${start[start.length]}"
      // refresh start
      // then push the current element
  
  // Outside the loop
    // if the start length has any elements
      // push the start and ends of the elements
    // otherwise if it has only one element then only push that

  // return output

  let start = [nums[0]];
  let output = [];
  
  // Going into the nums array
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      start.push(nums[i]);
    } else if (nums[i] !== nums[i - 1] + 1 ) {
      output.push(`${start[0]}->${start[start.length - 1]}`);
      start = [];
      start.push(nums[i]);
    }
  }
  
  if (start.length !== 1) {
    output.push(`${start[0]}->${start[start.length - 1]}`);
  } else {
    output.push(`${start[0]}`);
  }
  
  return output;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
// ["-1->2", "6->7", "9"]
console.log(composeRanges([-1, 0, 1, 2, 3, 6, 7, 8, 9, 11]));
// ["-1->3", "6-9", "11"]
console.log(composeRanges([1, 2, 3, 5, 6, 7]));
// ["1->3", "5->7"]