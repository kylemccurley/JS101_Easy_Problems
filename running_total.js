function runningTotal(arr) {
  let outcome = [];
  let iterator = 0;
  for(let i = 0; i < arr.length; i++) {
    iterator += arr[i];
    outcome.push(iterator);
  }

  return outcome;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
