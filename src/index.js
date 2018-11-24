const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

const FizzBuzzApp = {
    generateWord: function(opts) {
        let {i, wordCreatorFn} = opts,
            word;
        switch (true) {
            case (i % 3) === 0 && (i % 5) === 0:
                word = 'FizzBuzz';
                break;

            case (i % 3) === 0 && (i % 5) !== 0:
                word = 'Fizz';
                break;

            case (i % 3) !== 0 && (i % 5) === 0:
                word = 'Buzz';
                break;

            default:
                word = wordCreatorFn({ withErrors: false });
                break;
        }
        return word;
    },

    printNumericItems: function(n) {
        let _this = this;
        for(let i = 1; i <=n; i++) {
            let word = _this.generateWord({i, wordCreatorFn: getRandomWordSync});
            console.log(`${i}: ${word}`);
        }
    },

    printNumericItemsAsync: function(n) {
        let _this = this;
        for(let i = 1; i <=n; i++) {
            let word = _this.generateWord({i, wordCreatorFn: getRandomWord});
            if(word.then) {
                word.then(
                    word => console.log(`${i}: ${word}`),
                    error => console.log(`${i}: Something went wrong: ${error}`)
                  );
            } else {
                console.log(`${i}: ${word}`);
            }
        }
    }
}

FizzBuzzApp.printNumericItems(100);
FizzBuzzApp.printNumericItemsAsync(16);