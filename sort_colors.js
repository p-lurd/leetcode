var sortColors = function(nums) {
    let zero = 0;
    nums.forEach((num, i) => {
        if (num === 0) [nums[i], nums[zero++]] = [nums[zero], nums[i]];
    });
    nums.forEach((num, i) => {
        if (num === 1 && i >= zero) [nums[i], nums[zero++]] = [nums[zero], nums[i]];
    });
};