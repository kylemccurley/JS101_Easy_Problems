function repeater(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    for(let i = 0; i < 2; i++) {
      result += char;
    }
  }

  return result;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
