function searching() {
  const prompts = ['1st', '2nd', '3rd', '4th', '5th'];
  const readline = require('readline-sync');
  let numbers = [];
  for (let i = 0; i < prompts.length; i++) {
    let num = readline.question(`Please enter the ${prompts[i]} number: `);
    numbers.push(num);
  }
  
  let search = readline.question('Please enter the last number: ');
  if (numbers.indexOf(search) !== -1) {
    console.log(`The number ${search} appears in [${numbers}]`);
  } else {
    console.log(`The number ${search} appears in [${numbers}]`);
  }
}

searching()
