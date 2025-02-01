const s = "42";

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
    console.log(myAtoi(s));




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

console.log(myAtoi(s));
