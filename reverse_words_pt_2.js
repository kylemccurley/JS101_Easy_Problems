function reverseWords(str) {
  let words = str.split(' ');
  let processedWords = [];
  for (let idx = 0; idx < words.length; idx++) {
    let word = words[idx];
    if (word.length >= 5) {
      processedWords.push(reverseWord(word));
    } else {
      processedWords.push(word);
    }
  }

  return processedWords.join(' ');

  function reverseWord(word) {
    let outcome = '';
    for (let idx = (word.length - 1); idx >= 0; idx--) {
      outcome += word[idx];
    }

    return outcome;
  }
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
