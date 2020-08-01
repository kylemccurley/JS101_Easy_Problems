function reverseSentence(str) {
  let words = str.split(' ');
  let reversedWords = [];
  for (let idx = (words.length - 1); idx >= 0; idx--) {
    let word = words[idx];
    reversedWords.push(word);
  }

  return reversedWords.join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
