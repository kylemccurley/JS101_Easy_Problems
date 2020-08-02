function digitList(num) {
  let numStr = String(num);
  let sequence = [];
  for(let idx = 0; idx < numStr.length; idx++) {
    let number = Number(numStr[idx])
    sequence.push(number);
  }

  return sequence;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
