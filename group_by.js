Array.prototype.groupBy = function(fn) {
    let result={};
    for(const item of this){
        const id = fn(item);
        if(!result[id]){
            result[id]= [];
        }
        result[id].push(item)
    }
    return result;
};