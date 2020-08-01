function centerOf(str) {
  if (str.length % 2 == 1) {
    return str.substring((str.length - 1) / 2)
  } else {
    let lowerMiddleIdx = Math.floor((str.length - 1) / 2)
    let upperMiddleIdx = Math.ceil((str.length - 1) / 2);
    return str.substring(lowerMiddleIdx, upperMiddleIdx + 1);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
