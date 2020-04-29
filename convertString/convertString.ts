function convertString(s: string, t: string): boolean {
  // We want to determine if string s can be changed to string t

  // declare splitS and split s
  // declare splitT and split t

  // declare compare array

  // loop through splitS
    // loop through splitT
      // if current element in splitS matches that of current element of SplitT
        // store current splitT element into compare array then shift it
        // set the break point here to avoid dups
  
  // join the compare array
  // compare the compare array with t string
  // if they are the same return true
  // return false

  // let splitS = s.split('');
  // let splitT = t.split('');
  // let compare: string[] = [];

  // for (let i = 0; i < splitT.length; i++) {
  //   for (let j = 0; j < splitS.length; j++) {
  //     if (splitT[i] === splitS[j]) {
  //       compare.push(splitS[j]);
  //       splitS.shift();
  //       break;
  //     }
  //   }
  // }

  // return (compare.join('') === t) ? true : false;



  // Let's try to avoid nested loops
  let compare = '';
  let tIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[tIndex]) {
      compare += s[i];
      tIndex++;
    }
  }

  return (compare === t) ? true : false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights')); // true
console.log(convertString('addbyca', 'abcd')); // false
