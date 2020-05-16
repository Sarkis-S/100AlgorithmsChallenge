// We are to enclose the input string in a bracket
// A string of my name 'Sarkis' should return '(Sarkis)'

// Approach

// So the easiest approach is to split the string
// Then unshift the opening bracket and pushing the closing bracket

// Finally return the joined version of the string

function encloseInBrackets(inputString: string): string {
  let newString = inputString.split('');

  newString.unshift('(');
  newString.push(')');

  return newString.join('');
}

console.log(encloseInBrackets('abacaba'));
