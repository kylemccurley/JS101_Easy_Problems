

function palindromes(str) {
  let allSubstrings = substrings(str);
  let palindromes = [];
  let filterFunc = function (x) {
    x === reverse(x) && x.length > 1;
  }

   console.log(allSubstrings.filter(filterFunc));

  function reverse(sub) {
    let reversed = '';
    for (let i = (sub.length - 1); i >= 0; i--) {
      reversed += sub[i];
    }
    return reversed;
  }

  function substrings(string) {
    let substrings = [];
    for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
      let substring = string.substring(startIndex);
      substrings = substrings.concat(leadingSubstrings(substring));
    }

    return substrings;

  function leadingSubstrings(string) {
    let substrings = [];
    for (let length = 1; length <= string.length; length += 1) {
      substrings.push(string.slice(0, length));
    }

    return substrings;
    }
  }
}

palindromes('abcd'); 
palindromes('madam');
palindromes('hello-madam-did-madam-goodbye')
palindromes('knitting cassettes');
