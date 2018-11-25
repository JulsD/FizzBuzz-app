const FizzBuzzApp = require('./FizzBuzz');
const fetch = require('node-fetch');
const fs = require('fs');

console.log('It works!');

let dataSynchronous = FizzBuzzApp.printNumericItems(5),
    dataAsynchronous = FizzBuzzApp.printNumericItemsAsync(5);

Promise.all([dataSynchronous, dataAsynchronous])
.then(
    result => {
        let jsonResult = JSON.stringify(result);
        fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: jsonResult
        })
        .then(res => {
            console.log(res.ok);
            console.log(res.status);
            console.log(res.statusText);
        })
        .catch(err => console.error(err));

        fs.writeFile('data.json', jsonResult, 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been created/updated!');
        });
    },
    error => {
        console.log('Something goes wrong: ', error);
    }
);