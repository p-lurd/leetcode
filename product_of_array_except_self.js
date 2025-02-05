nums = [1,2,3,4]


// This solution does not work for arrays with zeros and negatuve numbers
var productExceptSelf = function(nums) {
    const maxProduct = nums.reduce((accumulator, currentValue)=> accumulator * currentValue, 1)
    console.log({maxProduct})
    let output = new Array(nums.length).fill(maxProduct);
    console.log({output})
    for(let i= 0; i<nums.length; i++){
        output[i]=output[i]/nums[i]
    }
    return output;
};

console.log(productExceptSelf(nums));



// This solution works just fine
var productExceptSelf = function(nums) {
    let prefix = 1;
    let suffix = 1;
    const result = new Array(nums.length).fill(1);
    for(let i = 0; i<nums.length; i++){
        result[i]=prefix
        prefix *=nums[i]
    }
    for(let i = nums.length-1; i>=0; i--){
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
};