// Create an array of numbers that are divisors of the given divisor number

function sequence(length, base) {
  let sequence = [];

  for (let multiplier = 1; multiplier <= length; multiplier++) {
    let num = (base * multiplier);
    sequence.push(num);
  }

  return sequence;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
