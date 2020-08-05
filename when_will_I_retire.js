const readline = require('readline-sync');
let age = readline.question('What is your age? ');
let retireAge = readline.question('At what age would you like to retire? ');
let date = new Date;
let year = date.getFullYear();
let retireYear = year + (retireAge - age);
let workYears = retireYear - year;

console.log(`It's ${year}. You will retire in ${retireYear}`);
console.log(`You have only ${workYears} years of work to go!`);
