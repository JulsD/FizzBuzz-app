const { getRandomWordSync, getRandomWord } = require('word-maker');

const FizzBuzzApp = {
    defaultWords: {
        x3: 'Fizz',
        x5: 'Buzz',
        x3x5: 'FizzBuzz',
        error: 'Doh!'
    },

    generateWord: function(opts) {
        let _this = this,
            {i, wordCreatorFn} = opts,
            word;
        try {
            switch (true) {
                case (i % (3 * 5)) === 0:
                    word = _this.defaultWords.x3x5;
                    break;

                case (i % 3) === 0:
                    word = _this.defaultWords.x3;
                    break;

                case (i % 5) === 0:
                    word = _this.defaultWords.x5;
                    break;

                default:
                    word = wordCreatorFn({ withErrors: true });
                    break;
            }
        } catch (e) {
            word = _this.defaultWords.error;
        }
        return word;
    },

    printNumericItems: function(n) {
        let _this = this,
            data = {};

        for(let i = 1; i <=n; i++) {
            let word = _this.generateWord({i, wordCreatorFn: getRandomWordSync});
            data[i] = word;
        }

        return data;
    },

    printNumericItemsAsync: function(n) {
        let _this = this,
            wordGeneratorQ = [],
            data = {};
        for(let i = 1; i <=n; i++) {
            let word = _this.generateWord({i, wordCreatorFn: getRandomWord});
            if(word.then) {
                wordGeneratorQ.push(word
                    .then( word => data[i] = word )
                    .catch( error => data[i] = _this.defaultWords.error ));
            } else {
                data[i] = word;
            }
        }

        return Promise.all(wordGeneratorQ)
            .then((results) => {
                return new Promise((resolve, reject) => { 
                    resolve(data)
                });
            },
            (error) => {
                console.log('Something goes wrong: ', error);
            });
    }
};

module.exports = FizzBuzzApp;