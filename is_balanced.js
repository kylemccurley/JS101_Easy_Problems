function isBalanced(str) {
  let openConnections = 0;
  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    if (char === '(') {
      openConnections++;
    } else if (char === ')') {
      if (!openConnections) {
        return false;
      } else {
        openConnections--;
      }
    }
  }

  return (!openConnections);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
