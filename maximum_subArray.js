// This is called the Kadane's algorithm

var maxSubArray = function(nums) {
    let maxEnding = nums[0];
    let res = nums[0];
    for(i=1;i<nums.length; i++){
        maxEnding = Math.max(maxEnding+nums[i], nums[i]);
        res = Math.max(res, maxEnding)
    }
    return res;
};