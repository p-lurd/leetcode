const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
console.log(matrix.sort((a, b) => a - b).flat());


// first Attempt, i need to stop writing assignment operator on default...lol
// Basically, this is a rough understanding usage of binary search
var searchMatrix = function(matrix, target) {
    const sortedMatrix = matrix.flat().sort((a, b) => a - b);
    let prevPos = 0;
    let refPos = matrix.length/2;
    findTarget(matrix, refPos, prevPos, target);
};
function findTarget(matrix, refPos, prevPos, target){
    if(matrix[refPos]=target){return true}
    if(matrix[refPos]<target){
        if(matrix[refPos + 2]>=target){
            for(let i=refPos; i<refPos+2; i++){
                if(matrix[i]===target){return true}
            }
            return false;
        }else{
        prevPos = refPos;
        refPos = Math.floor(refPos*1.5);
        findTarget(matrix, refPos, prevPos, target);
        }
    }
    if(matrix[refPos]>target){
        if(matrix[refPos - 2]<=target){
            for(let i=refPos; i<refPos-2; i--){
                if(matrix[i]===target){return true}
            }
            return false;
        }else{
        prevPos = refPos;
        refPos = Math.floor(refPos*0.5);
        findTarget(matrix, refPos, prevPos, target);
        }
    }
    return false;
} 



// Solution
// This is not a very efficient method, but i wanted to use a binary search regardless
var searchMatrix = function(matrix, target) {
    const sortedMatrix = matrix.flat().sort((a, b) => a - b);
    return binarySearch(sortedMatrix, target, 0, sortedMatrix.length - 1);
};

function binarySearch(arr, target, low, high) {
    if (low > high) return false;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return true;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1);
    }
}
