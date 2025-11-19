

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let binaryIndex = -1;
    function isEqualOrMore(val, targ){
        return val>=targ;
    }
    while (left<=right){
        let mid = Math.floor((left + right)/2);
        if(isEqualOrMore(arr[mid], target)){
            binaryIndex = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    } 
    return binaryIndex;
}


arr = [2, 3, 5, 7, 11, 13, 17, 19]
target = 6

console.log(binarySearch(arr, target))