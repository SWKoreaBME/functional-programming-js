const _ = require("lodash");

_.map(persons,
    s => ( s !== null && s !== undefined ? s.fullname : " ")
);

//if you want reversed array (list), Reverse method changes original list
_(persons).reverse().map(
    p => ( p !== null && p !== undefined ? p.fullname : " ")
);

// let's do some reduce method here

_(persons).reduce((stat, person) => {
    const country = person.address.country;
    stat[country] = _.isUndefined(stat[country]) ? 1 : stat[country] + 1;
    return stat;
}, {})

// map 은 데이터를 변환하는 작업
// reduce 는 변환된 데이터로부터 의미 있는 결과를 도출하는 작업

function reduce(arr, fn, accumulator) {

    let idx = -1,
        len = arr.length;

    // accumulator 를 지정하지 않으면 배열의 첫번째 원소를 초깃값으로 삼습니다.
    if (!accumulator && len > 0){
        accumulator = arr[++idx];
    }

    while ( ++idx < len ) {
        accumulator = fn(accumulator, arr[idx], arr);
    }

    return accumulator;
};

// combination of map and reduce method

const getCountry = person => person.address.country;

const gatherStats = function (stat, criteria) {
    stat[criteria] = _.isUndefined(stat[criteria]) ? 1 : stat[criteria] + 1;
    return stat;
};

_(persons).map(getCountry).reduce(gatherStats, {});