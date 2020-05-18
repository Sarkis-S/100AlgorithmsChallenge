// We're taking in a number
// then checking if all "digit's" are even

// Approach

// start by turning the number into a string
// then split it into an array

// iterate through the array
  // for each parsed element perform modulo division for check
    // if any aren't even 
      // return false

// otherwise return true;

function evenDigitsOnly(n: number): boolean {
  let stringifiedNum = n.toString().split('');

  // Note: forEach will not work here because it applies the function on EACH element
  for (let i = 0; i < stringifiedNum.length; i++) {
    let isEven = parseInt(stringifiedNum[i]) % 2 === 0;

    if (isEven === false) {
      return false;
    }
  }

  return true;
}

console.log(evenDigitsOnly(248622)); // true
console.log(evenDigitsOnly(642386)); // false