function one() {
  function log(result) {
    console.log(result); // 
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result); // to is passed to the log function
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // Welcome (1);
    anotherOne(116, 111); // to
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101); // The
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33); // Matrix
