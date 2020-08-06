function wordSizes(str) {
  let words = str.split(' ');
  let lengthCount = {};
  if (!str) {
    return lengthCount;
  }

  for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].length;
    if (!lengthCount[wordLength]) {
      lengthCount[wordLength] = 1;
    } else {
      lengthCount[wordLength] += 1;
    }
  }

  return lengthCount;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
