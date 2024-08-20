const sumAll = function(start, end) {
    let additive, result = 0;

    if (start > end) {
        additive = end;
        result = end;
    } else {
        additive = start;
        result = start;
    }
    

    for (let i = start; i < end; i++) {
        additive += 1;
        result += additive;
    }

    return result;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
