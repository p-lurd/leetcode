//..................first solution

var flat = function (arr, n) {
    if(n>0){
        let result = []
        for(const item of arr){
            if(Array.isArray(item)){
                result.push(...item)
            }
            else{
                result.push(item);
            }
        }
        return flat(result, n-1)
    }else{
        return arr;
    }
};


// ..................A more optimized solution
var flat = function (arr, n) {
    if(n>0){
        let result = []
        // for(const [index, item] of arr.entries()){
        for(const item of arr){
            if(Array.isArray(item)){
                result.push(...flat(item, n-1));
            }
            else{
                result.push(item);
            }
        }
        return result;
    }else{
        return arr;
    }
};