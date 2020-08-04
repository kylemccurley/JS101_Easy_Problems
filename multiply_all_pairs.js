function multiplyAllPairs(arr1, arr2) {
  let multipliedPairs = [];
  for (num1 of arr1) {
    for (num2 of arr2) {
      multipliedPairs.push(num1 * num2);
    }
  }

  return multipliedPairs.sort(sortAscending);

  function sortAscending(el1, el2) {
    if (el1 > el2) { 
      return 1;
    } else if (el1 < el2) {
      return -1;
    } else {
      return 0;
    }
  }
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
