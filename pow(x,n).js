var myPow = function(x, n) {
    let pow = 1;
    // if(n=0){return pow}
    if(n>0){
    for(let i= 0; i<n; i++){
        pow *= x;
    }
    }else{
        for(let i=0; i>n; i--){
            pow /=x
        }
    }
    return pow;
};



var myPow = function(x, n) {
    // Base case: any number raised to the power 0 is 1
    if (n === 0) return 1;
    
    // Handle negative exponent
    let exponent = n;
    if (exponent < 0) {
        x = 1 / x;
        exponent = -exponent;
    }
    
    let result = 1;
    
    while (exponent > 0) {
        // If exponent is odd, multiply result by x
        if (exponent % 2 === 1) {
            result *= x;
        }
        // Square x for the next bit and halve the exponent
        x *= x;
        exponent = Math.floor(exponent / 2);
    }
    
    return result;
};
