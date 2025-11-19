function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let binaryIndex = -1;
    while (left<=right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target){
            binaryIndex = mid;
            right = mid - 1;
        }else if (arr[mid] < target) {
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    } 
    return binaryIndex;
}
    
arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
target = 3