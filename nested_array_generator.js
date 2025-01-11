var inorderTraversal = function*(arr) {
    if(arr.length !== 0){
        for(const item of arr){
            if(Array.isArray(item)){
                yield* inorderTraversal(item)
            }else{
                yield item;
            }   
        }
    }

};



// ................A more optimized version
var inorderTraversal = function* (arr) {
    const stack = [...arr.reverse()];
    while (stack.length > 0) {
        const item = stack.pop();
        if (Array.isArray(item)) {
            stack.push(...item.reverse());
        } else {
            yield item;
        }
    }
};

// Avoid Recursive Function Calls: Recursive function calls could lead to stack overflow for deeply nested arrays. Instead, we can implement the traversal iteratively using an explicit stack.
// Iterative Approach Using a Stack: This avoids recursion while preserving the same in-order traversal behavior.
