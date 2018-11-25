const fetch = require('node-fetch');
const fs = require('fs');

function postData(data) {
    return fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    })
}

function writeDataToFile(data) {
    fs.writeFile('data.json', data, 'utf8', (err) => {
        if (err) console.error( err );
        console.log('The file has been created/updated!');
    });
}

module.exports = { postData, writeDataToFile };