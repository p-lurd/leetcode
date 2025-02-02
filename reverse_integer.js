const x = -123



var reverse = function(x) {
    let negativity = false;
    let result="";
    let input = x.toString();
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);
    if(input[0]=== "-"){
        negativity = true;
        input = Math.abs(x).toString();
    }
    for(let i=input.length-1; i>=0; i--){
        result +=input[i];
    }
    let finalVal = parseInt(result);
    if(negativity){
        finalVal = finalVal * -1;
    }
    if (finalVal > INT_MAX || finalVal < INT_MIN) {
        return 0;
    }
    
    return finalVal;
};

console.log(reverse(x))