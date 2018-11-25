const FizzBuzzApp = require('./FizzBuzz');
const { postData, writeDataToFile } = require('./dataServices');

console.log('It works!');

let dataSynchronous = FizzBuzzApp.printNumericItems(100),
    dataAsynchronous = FizzBuzzApp.printNumericItemsAsync(100);

Promise.all([dataSynchronous, dataAsynchronous])
.then(
    result => {
        let jsonResult = JSON.stringify(result, null, 4);
        postData(jsonResult)
        .then(res => {
            console.log(res.ok);
            console.log(res.status);
            console.log(res.statusText);
        })
        .catch(err => console.error(err));

        writeDataToFile(jsonResult);
    },
    error => {
        console.log('Something goes wrong: ', error);
    }
);