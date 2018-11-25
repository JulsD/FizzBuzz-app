const FizzBuzzApp = require('./FizzBuzz');
const testWordGenerator = () => {
    return 'World'
}

describe('generateWord function should:', () => {
    test('for multiples of three, print "Fizz"', () => {
        expect(FizzBuzzApp.generateWord({i:3, wordCreatorFn: testWordGenerator})).toBe('Fizz');
    });
    
    test('for multiples of five, print "Buzz"', () => {
        expect(FizzBuzzApp.generateWord({i:5, wordCreatorFn: testWordGenerator})).toBe('Buzz');
    });
    
    test('for multiples of five and three, print "FizzBuzz"', () => {
        expect(FizzBuzzApp.generateWord({i:15, wordCreatorFn: testWordGenerator})).toBe('FizzBuzz');
    });
    
    test('if not multiples of five or three and no Error, print generated word', () => {
        expect(FizzBuzzApp.generateWord({i:1, wordCreatorFn: testWordGenerator})).toBe('World');
    });
    
    test('when an error is caught, print "Doh!"', () => {
        expect(FizzBuzzApp.generateWord({i:2, wordCreatorFn: () => {throw Error}})).toBe('Doh!');
    });
    test('if not multiples of five or three and no Error, print generated word', () => {
        const wordCreatorFnMock = jest.fn();
        FizzBuzzApp.generateWord({i:1, wordCreatorFn: wordCreatorFnMock});
        expect(wordCreatorFnMock).toHaveBeenCalled();
    });
});

describe('printNumericItems function should:', () => {
    let dataObj;

    beforeAll(() => {
        dataObj = FizzBuzzApp.printNumericItems(15);
    });

    afterAll(() => {
        dataObj = null;
    });

    test('return N numbered list of words', () => {
        expect(Object.keys(dataObj).length).toBe(15);
    });

    test('return "Fizz" word for the "3" key', () => {
        expect(dataObj["3"]).toBe("Fizz");
    });

    test('return "Buzz" word for the "5" key', () => {
        expect(dataObj["5"]).toBe("Buzz");
    });

    test('return "FizzBuzz" word for the "15" key', () => {
        expect(dataObj["15"]).toBe("FizzBuzz");
    });
});

describe('printNumericItemsAsync function should:', () => {
    let dataPromise;

    beforeEach(() => {
        dataPromise = FizzBuzzApp.printNumericItemsAsync(15);
    });

    afterEach(() => {
        dataPromise = null;
    });

    test('return a Promise', () => {
        dataPromise.then(result => {
            expect(result).toBeInstanceOf(Promise);
        });
    });

    test('return a Promise which returns N numbered list of words', () => {
        dataPromise.then(promiseExp => {
            promiseExp.then(data => {
                expect(Object.keys(data).length).toBe(15);
            })
        });
    });
    
    test('return a Promise which returns "Fizz" word for the "3" key', () => {
        dataPromise.then(promiseExp => {
            promiseExp.then(data => {
                expect(dataObj["3"]).toBe("Fizz");
            })
        });
    });

    test('return a Promise which returns "Buzz" word for the "5" key', () => {
        dataPromise.then(promiseExp => {
            promiseExp.then(data => {
                expect(dataObj["5"]).toBe("Buzz");
            })
        });
    });

    test('return a Promise which returns "Buzz" word for the "15" key', () => {
        dataPromise.then(promiseExp => {
            promiseExp.then(data => {
                expect(dataObj["15"]).toBe("FizzBuzz");
            })
        });
    });
});