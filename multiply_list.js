function multiplyList(arr1, arr2) {
  let sequence = [];
  for (let i = 0; i < arr1.length; i++) {
    let product = arr1[i] * arr2[i];
    sequence.push(product);
  }

  return sequence;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
