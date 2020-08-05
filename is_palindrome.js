function isPalindrome(str) {
  return str === reverse(str);
  function reverse(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i > -1; i--) {
      let char = str[i];
      reversedStr += char;
    }

    return reversedStr;
  }
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
