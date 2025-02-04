const height = [4,2,0,3,2,5]

var trap = function(height) {
    let leftCursor = 0;
    let rightCursor = height.length - 1;
    let leftMax = height[leftCursor];
    let rightMax = height[rightCursor];
    let sum = 0;
    while(leftCursor<rightCursor){
        if(leftMax<=rightMax){
            leftCursor++;
            leftMax = Math.max(leftMax, height[leftCursor]);
            sum+=leftMax-height[leftCursor]
        }else{
            rightCursor--;
            rightMax = Math.max(rightMax, height[rightCursor]);
            sum+=rightMax-height[rightCursor];
        }
    }
    return sum;
};

console.log(trap(height))