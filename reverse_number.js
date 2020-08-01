function reverseNumber(num) {
  let numberStr = String(num);
  let resultStr = '';

  for(let idx = (numberStr.length - 1); idx >= 0; idx--) {
    let char = numberStr[idx];
    if (!(char === '0')) {
      resultStr += char;
    }
  }

  return resultStr;
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
