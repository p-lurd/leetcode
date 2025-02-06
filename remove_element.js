var removeElement = function(nums, val) {
    let index = 0;
    let length = nums.length
    nums.sort(function(a, b){return a-b});
    const p = nums.indexOf(val);
    if(p === -1){return length}
    for(let i = p; i<nums.length; i++){
        if(nums[i]=== val){
            nums[i]=Infinity
            index++
        }else{break}
    }
    nums.sort(function(a, b){return a-b});
    return length - index
};

nums = [0,1,2,2,3,0,4,2]
console.log(removeElement(nums,2))