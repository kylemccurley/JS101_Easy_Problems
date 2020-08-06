function isRealPalindrome(str) {
  let convertedString = str.toLowerCase().match(/(\w)/g).join('');
  return isPalindrome(convertedString);
  
  function isPalindrome(string) {
    return string === string.split('').reverse().join('');
  }
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
