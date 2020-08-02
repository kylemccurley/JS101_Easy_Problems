function union(arr1, arr2) {
  let sequence = [];
  copyElements(sequence, arr2);
  copyElements(sequence, arr1);
  return sequence;

  function copyElements(iterator, array) {
    for (let idx = 0; idx < arr1.length; idx++) {
      let el = array[idx];
      if (!iterator.includes(el)) {
        iterator.push(el);
      }
    }

    return array;
  }

  return sequence;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
