function sum(num) {
  let total = 0;
  let strNum = String(num);
  for(let idx = 0; idx < strNum.length; idx++) {
    let digit = Number(strNum[idx]);
    total += digit;
  }

  return total
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
