var minZeroArray = function(nums, queries) {
    let diff = Array(nums.length + 1).fill(0)
    for(const [l, r, val] of queries){
        diff[l] += val;
        if( r+1 > nums.length){
            diff[r+1] -= val;
        }
    }
    let newNums = nums;
    let newDiff = diff
    newNums.sort();
    let maxNum = newNums[nums.length - 1];
    newDiff.sort();
    console.log({newDiff})
    let maxDiff = newDiff[nums.length - 1];
    console.log({maxDiff, maxNum});
    if(maxNum <= maxDiff){
        return maxNum;
    }else{
        return -1;
    }
//     let curr = 0;
//     for(let i = 1; i<n; i++){
//         curr -= diff[i];
//         nums[i] += curr;
//         if(nums[i]<0){
//             nums[i] = 0;
//         }
//     }
//     if(nums.every((num) => num < 1)){
//     return diff.max()
//   }
};

// console.log(minZeroArray([2,0,2],[[0,2,1],[0,2,1],[1,1,3]]))





//........................An Optimised Solution
var minZeroArray = function (nums, queries) {
    const diff = Array(nums.length + 1).fill(0); // Initialize diff array

    // Populate the difference array
    for (const [l, r, val] of queries) {
        diff[l] += val;
        if (r + 1 < diff.length) {
            diff[r + 1] -= val;
        }
    }

    // Find max values directly from nums and diff without extra sorting
    const maxNum = Math.max(...nums);
    let curr = 0, maxDiff = 0;

    maxDiff = Math.max(...diff);

    // for (let i = 0; i < nums.length; i++) {
    //     curr += diff[i]; // Apply cumulative updates
    //     maxDiff = Math.max(maxDiff, curr); // Track max diff value
    // }

    // Check if maxNum can be reduced to zero using maxDiff
    return maxNum <= maxDiff ? maxNum : -1;
};





var minZeroArray = function(nums, queries) {
    let diff = Array(nums.length + 1).fill(0);

    for (let queryIndex = 0; queryIndex < queries.length; queryIndex++) {
        const [l, r, val] = queries[queryIndex];
        diff[l] += val;
        if (r + 1 < diff.length) {
            diff[r + 1] -= val;
        }
        let curr = 0;
        for (let i = 0; i < nums.length; i++) {
            curr += diff[i];
            nums[i] += curr;
        }
        if (nums.every((num) => num < 1)) {
            return queryIndex + 1;
        }
    }

    return -1;
};



var minZeroArray = function (nums, queries) {
    const diff = Array(nums.length + 1).fill(0);

    // Apply queries incrementally
    for (let queryIndex = 0; queryIndex < queries.length; queryIndex++) {
        const [l, r, val] = queries[queryIndex];
        diff[l] -= val;
        if (r + 1 < diff.length) {
            diff[r + 1] += val;
        }

        // Use the difference array to update nums incrementally
        let curr = 0;
        for (let i = 0; i < nums.length; i++) {
            curr += diff[i];
            nums[i] += curr;
            if (nums[i] < 0) {
                nums[i] = 0;
            }
        }

        // Check if nums is a zero array
        if (nums.every((num) => num === 0)) {
            return queryIndex + 1; // Return the number of queries ran
        }
    }

    return -1; // Return -1 if nums cannot be made a zero array
};
