function letterPercentages(str) {
  let letterCountPercentages = {};
  let letterCount = countLetters();
  for (let type in letterCount) {
    let val = letterCount[type];
    letterCountPercentages[type] = ((val / str.length)* 100).toFixed(2);
  }

  return letterCountPercentages;

  function countLetters() {
    const UPPERCASE_REGEX = /[A-Z]/g;
    const LOWERCASE_REGEX = /[a-z]/g;
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let neitherCount = 0;

    for (let i = 0; i < str.length; i++) {
      let el = str[i];
      if(el.match(UPPERCASE_REGEX)) {
        uppercaseCount++;
      } else if (el.match(LOWERCASE_REGEX)) {
        lowercaseCount++;
      } else {
        neitherCount++;
      }
    }

    return {
      uppercase: uppercaseCount,
      lowercase: lowercaseCount,
      neither: neitherCount,
    }
  }
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

//letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
