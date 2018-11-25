const FizzBuzzApp = require('./FizzBuzz');

let results = {};

console.log('It works!');

console.log('======= Synchronous =======');
FizzBuzzApp.printNumericItems(100);

console.log('======= Asynchronous =======');
FizzBuzzApp.printNumericItemsAsync(100);
