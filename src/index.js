const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');
printNumericItems(100);

function printNumericItems(n) {
    for(let i = 1; i <=n; i++) {
        const word = getRandomWordSync({ withErrors: false });
        console.log(`${i}: ${word}`);
    }
}