function containsCloseNums(nums: number[], k: number): boolean {
  // Challenge prompt is a bit confusing, let's hope I understood it correctly

  // loop through the nums array
    // if current nums is equal to nums + k
      // if the absolute value of the differences of the two indicies is less <= k
        // return true
  // return false
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + k]) {
      if (Math.abs(i) - Math.abs(i + k)) {
        return true;
      }
    }
  }

  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3)); // true
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2)); // false