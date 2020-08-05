function makeDoubler(caller) {
  return function (number) {
    return doubler(number, caller);
  }

  function doubler(number, caller) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}

const doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.
