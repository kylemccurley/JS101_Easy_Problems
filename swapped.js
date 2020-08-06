function swap(str) {
  let words = str.split(' ');
  let swappedWords = [];
  for(let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length === 1) {
      swappedWords.push(word);
      continue;
    }

    let first = word[0];
    let last = word[word.length - 1];
    let middleSeaction = word.slice(1, word.length - 1);
    swappedWords.push(last + middleSection + first);
  }

  return swappedWords.join(' ');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
