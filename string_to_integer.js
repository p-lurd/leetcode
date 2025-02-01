const s = "-01042";




// Best solution is this
var myAtoi = function(s) {
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);

    let i = 0;
    let sign = 1;
    let result = 0;
    const n = s.length;
    while (i < n && s[i] === ' ') {
        i++;
    }
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        i++;
    }
    
    return result * sign;
};




// This doesnt handle negative numbers properly
var myAtoi = function(s) {
    let val=""
    for(let i =0; i<s.length; i++){
        if(isNaN(s[i])){
            return val
        }
        else if(s[i]===' '){
            continue;
        }
        else{
            val= val+s[i]
        }
        
    }
    return val;
};
    // console.log(myAtoi(s));




// this is perfect

var myAtoi = function(s) {
    let val = "";
    let negative = false;
    let i = 0;
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    if (i < s.length && (s[i] === '-' || s[i] === '+')) {
        negative = (s[i] === '-');
        i++;
    }
    for (; i < s.length; i++) {
        if (isNaN(s[i]) || s[i] === ' ') {
            break;
        }
        val += s[i];
    }
    if (val === "") {
        return 0;
    }
    let num = parseInt(val);
    if (negative) {
        num = -num;
    }
    return num;
};

// console.log(myAtoi(s));



function myAtoi(s) {
    let val =""
    for (let i = 0; i<s.length; i++) {
        if (s[i]===" "){
            continue;
        }
        if(!isNaN(s[i]) || s[i] ==="+" || s[i] === "-"){
            val += s[i];
        }
        else{
            break;
        }
    }
    return parseInt(val);
};
console.log(myAtoi(s));