function sequence(max) {
  let sequence = [];
  for (let iterator = 1; iterator <= max; iterator++) {
    sequence.push(iterator);
  }

  return sequence;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
