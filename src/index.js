const FizzBuzzApp = require('./FizzBuzz');
const fetch = require('node-fetch');

console.log('It works!');

let dataSynchronous = FizzBuzzApp.printNumericItems(5),
    dataAsynchronous = FizzBuzzApp.printNumericItemsAsync(5);

Promise.all([dataSynchronous, dataAsynchronous])
.then(
    result => {
        fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        })
        .then(res => {
            console.log(res.ok);
            console.log(res.status);
            console.log(res.statusText);
        })
        .catch(err => console.error(err));
    },
    error => {
        console.log('Something goes wrong: ', error);
    }
);