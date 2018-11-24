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
        let word;
        for(let i = 1; i <=n; i++) {
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
                    word = getRandomWordSync({ withErrors: false });
                    break;
            }

            console.log(`${i}: ${word}`);
        }
    }
}

FizzBuzzApp.printNumericItems(100);