var debounce = function(fn, t) {
    let timeId;
    return function(...args) {
        clearTimeout(timeId);
        timeId = setTimeout(()=>fn(...args), t)
    }
};