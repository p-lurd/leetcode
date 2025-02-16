var removeDuplicates = function(nums) {
    let curr;
    let arr = []
    for(let i = 0; i<nums.length; i++){
        curr = nums[i];
        if(!arr.includes(nums[i])){
            arr.push(nums[i])
        }
    }
    return arr;
};


var removeDuplicates = function(nums) {
    return [...new Set(nums)];
};