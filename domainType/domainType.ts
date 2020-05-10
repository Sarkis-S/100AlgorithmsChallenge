// Input is an array of domains. It returns an array containing the type of domain of each. Ex: en.wiki.org returns type organization

// Approach
  // Begin by creating an object of various domains
  
  // Iterate through the array
    // Get the slice from "." to the end of the string
    // (Note: will have to go backwards to avoid double '.')
    // Store the string domain to a grabDomains variable
    // Break the code here in case of double '.'

  // Run grabDomains through the typeDomains object
    // If typeDomains contains that domain
    // Store the type of domain to output
// Return the output

// function domainType(domains: string[]): string[] {
//   const typeDomains = {
//     '.org': 'organiztion',
//     '.com': 'commercial',
//     '.net': 'network',
//     '.info': 'information'
//   }

//   let grabDomains = [];
//   let output = [];

//   domains.forEach((domain) => {
//     for (let i = domain.length; i > 0; i--) {
//       let temp = '';

//       if (domain[i] === '.') {
//         temp += domain.slice(i);
//         grabDomains.push(temp);
//         break;
//       }
//     }
//   });

//   for (let i = 0; i < grabDomains.length; i++) {
//     if (typeDomains.hasOwnProperty(grabDomains[i])) {
//       output.push(typeDomains[grabDomains[i]]);
//     }
//   }

//   return output;
// }

// There must be an easier way without nested loops
function domainType(domains: string[]): string[] {
  const typeDomains = {
        'org': 'organiztion',
        'com': 'commercial',
        'net': 'network',
        'info': 'information'
      }

  const output = [];
  let grabDomains = [];

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.');
    grabDomains.push(domain[domain.length - 1]);
  }

  for (let j = 0; j < grabDomains.length; j++) {
    if (typeDomains.hasOwnProperty(grabDomains[j])) {
      output.push(typeDomains[grabDomains[j]]);
    }
  }
  
  return output;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));