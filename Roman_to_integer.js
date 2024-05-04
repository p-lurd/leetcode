//  SOLUTION 1
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;

            const romanNumerals = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
            };
  
    let arr = s.split('')
    console.log({arr})
    let length = arr.length
    for(let i = length-1; i >= 0; i--){
        let number = romanNumerals[arr[i]];
        if (romanNumerals[arr[i]]<romanNumerals[arr[i+1]]){
            sum = sum - number
            console.log('sum1', sum)
        }else{
            sum = sum + number
            console.log('sum2', sum)
        }

    }

    return sum;
};



// solution 2

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    function checkValue(val) {
    let number;

    switch (val) {
        case "I":
            number = 1;
            break;
        case "V":
            number = 5;
            break;
        case "X":
            number = 10;
            break;
        case "L":
            number = 50;
            break;
        case "C":
            number = 100;
            break;
        case "D":
            number = 500;
            break;
        case "M":
            number = 1000;
            break;
        default:
            number = 0;
    }
    console.log({number})
    return number;
}
    let arr = s.split('')
    console.log({arr})
    let length = arr.length
    for(let i = length-1; i >= 0; i--){
        let number = checkValue(arr[i]);
        if (checkValue(arr[i])<checkValue(arr[i+1])){
            sum = sum - number
            console.log('sum1', sum)
        }else{
            sum = sum + number
            console.log('sum2', sum)
        }

    }

    return sum;
};