function dms(degreesFloat) {
  let degrees = Math.floor(num);
  let minutes = calculateMinutes();
  let seconds = calculateSeconds();
  return String(degrees + '˚' + minutes + '\'' + seconds + '"');

  function calculateMinutes() {
    const MINUTES_PER_DEGREE = 60;

    let calc = Math.floor(MINUTES_PER_DEGREE * (num - degrees));
    return (String(calc).length < 2 ? ('0' + calc) : calc);
  }

  function calculateSeconds() {
    const SECONDS_PER_MINUTE = 60;
    let calc = Math.floor(SECONDS_PER_MINUTE * (SECONDS_PER_MINUTE * ((num - degrees) - minutes)));
    return (String(calc).length < 2 ? ('0' + calc) : calc);
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
