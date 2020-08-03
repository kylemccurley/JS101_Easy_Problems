function wordSizes(str) {

  let outcome = {};
  let words = str.split(' ');
  for (let idx = 0; idx < words.length; idx++) {
    let word = words[idx];
    if (!word) {
      continue;
    }
  
    let length = parseWord(word).length;
    if (!outcome[length]) {
      outcome[length] = 1;
    } else {
      outcome[length] += 1;
    }
  }

  return outcome;

  function parseWord(word) {
    let regex = (/\w/g);
    return word.match(regex);
  }
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
