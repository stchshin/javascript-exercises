const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }
    let sum = 0;
    let count = start;
    while (count != end + 1) {
        sum += count;
        count++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
