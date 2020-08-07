function sumOfSums(arr) {
  let toSum = [];
  let adder = (accumulator, value) => {
    return accumulator + value;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    toSum.push(arr[i]);
    sum += toSum.reduce(adder);
  }

  return sum
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
