const _ = require("lodash");



_.map(persons,
    s => ( s !== null && s !== undefined ? s.fullname : " ")
);

//if you want reversed array (list), Reverse method changes original list
_(persons).reverse().map(
    p => ( p !== null && p !== undefined ? p.fullname : " ")
);


// function map internal code
function map(arr, fn) {
    const len = arr.length, result = new Array(len);
    for (let idx = 0; idx < len; ++idx) {
        result[idx] = fn(arr[idx], idx, arr);
    }
    return result
};