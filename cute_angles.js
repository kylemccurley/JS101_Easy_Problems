function dms(num) {
  let degrees = Math.floor(num);
  let minutes = calculateMinutes();
  let seconds = calculateSeconds();
  let output = String(degrees + '˚' + minutes + '\'' + seconds + '"');

  function calculateMinutes() {
    let calc = Math.floor(60 * (num - degrees));
    return (String(calc).length < 2 ? ('0' + calc) : calc);
  }

  function calculateSeconds() {
    let calc = Math.floor(60 * (60 * (num - degrees) - minutes));
    return (String(calc).length < 2 ? ('0' + calc) : calc);
  }
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
