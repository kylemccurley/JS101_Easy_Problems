function buyFruit(arr) {
  let accumulator = [];
  for (let i = 0; i < arr.length; i++) {
    let fruit = arr[i];
    for (let i = 0; i < fruit[1]; i++) {
      accumulator.push(fruit[0]);
    }
  }

  return accumulator;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Will there always be 3 arrays passed into the function?
