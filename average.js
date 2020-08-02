function multiplicativeAverage(arr) {
  let iterator = arr[0];
  for(let i = 1; i < arr.length; i++) {
    iterator *= arr[i];
  }

  return (iterator / arr.length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
