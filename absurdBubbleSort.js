const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question('Is ' + el1 + ' greater than ' + el2 + '?: ', answer => {
    if (answer == 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}
