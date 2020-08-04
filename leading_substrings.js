 function leadingSubstrings(str) {
  let outcome = [];
  for(let endIdx = 1; endIdx <= str.length; endIdx++) {
    outcome.push(str.slice(0, endIdx));
  }

  return outcome;
}

leadingSubstrings('abc') == ["a", "ab", "abc"];
leadingSubstrings('a') == ["a"];
leadingSubstrings('xyzzy') == ["x", "xy", "xyz", "xyzz", "xyzzy"];
