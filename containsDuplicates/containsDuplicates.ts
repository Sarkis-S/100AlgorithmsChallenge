function containsDuplicates(a: number[]): boolean {
  // So we're looking for duplicates

  // I'll use an object to store the count
  // Loop through array
    // if the storage object doesn't yet contain the number
      // store it
    // otherwise
      // increase the count
  
  // iterate though the object
    // if the count is more than 2
      // return true
  
  // return false

  let dupTracker = {}

  for (let i = 0; i < a.length; i++) {
    if (!dupTracker[a[i]]) {
      dupTracker[a[i]] = 1;
    } else {
      dupTracker[a[i]]++;
    }
  }

  for (let key in dupTracker) {
    if (dupTracker[key] > 1) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1])); // true
console.log(containsDuplicates([3, 1])); // false
