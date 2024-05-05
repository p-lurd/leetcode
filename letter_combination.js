/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || digits.length === 0) {
        return [];
    }

    const numLetters = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ["j",'k','l'],
        '6': ["m","n",'o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w',"x",'y','z']
    };

    const generateCombinations = (remainingDigits, currentCombination) => {
        if (remainingDigits.length === 0) {
            return [currentCombination];
        }
        
        const nextDigit = remainingDigits[0];
        const letters = numLetters[nextDigit];
        if (!letters) {
            return generateCombinations(remainingDigits.slice(1), currentCombination);
        }

        let combinations = [];
        for (let letter of letters) {
            combinations = combinations.concat(
                generateCombinations(remainingDigits.slice(1), currentCombination + letter)
            );
        }
        return combinations;
    };

    return generateCombinations(digits, '');
};