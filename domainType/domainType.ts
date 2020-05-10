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

function domainType(domains: string[]): string[] {
  const typeDomains = {
    '.org': 'organiztion',
    '.com': 'commercial',
    '.net': 'network',
    '.info': 'information'
  }

  let grabDomains = [];
  let output = [];

  domains.forEach((domain) => {
    for (let i = domain.length; i > 0; i--) {
      let temp = '';

      if (domain[i] === '.') {
        temp += domain.slice(i);
        grabDomains.push(temp);
        break;
      }
    }
  });

  for (let i = 0; i < grabDomains.length; i++) {
    if (typeDomains.hasOwnProperty(grabDomains[i])) {
      output.push(typeDomains[grabDomains[i]]);
    }
  }

  return output;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));