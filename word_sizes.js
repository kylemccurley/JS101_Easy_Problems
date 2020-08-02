function wordSizes(str) {
  let outcome = {};
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let el = words[i].length;
    let value = outcome[el];
    if (!value) {
      outcome[el] = 1;
    } else {
      outcome[el] += 1;
    }
  }

  return outcome;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
