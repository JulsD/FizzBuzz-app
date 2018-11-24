const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

const FizzBuzzApp = {
    defaultWords: {
        x3: 'Fizz!',
        x5: 'Buzz',
        x3x5: 'FizzBuzz',
        error: 'Doh!'
    },

    generateWord: function(opts) {
        let _this = this,
            {i, wordCreatorFn} = opts,
            word;
        switch (true) {
            case (i % 3) === 0 && (i % 5) === 0:
                word = _this.defaultWords.x3x5;
                break;

            case (i % 3) === 0 && (i % 5) !== 0:
                word = _this.defaultWords.x3;
                break;

            case (i % 3) !== 0 && (i % 5) === 0:
                word = _this.defaultWords.x5;
                break;

            default:
                try {
                    word = wordCreatorFn({ withErrors: true });
                } catch (e) {
                    word = _this.defaultWords.x3.error;
                }
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
                word
                .then( word => console.log(`${i}: ${word}`) )
                .catch( error => console.log(`${i}: ${_this.errorWord}`) );
            } else {
                console.log(`${i}: ${word}`);
            }
        }
    }
}

FizzBuzzApp.printNumericItems(100);
FizzBuzzApp.printNumericItemsAsync(100);