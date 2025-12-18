const fibonacci = function(num) {
    let arr = [];
    if (num == 0) return 0;
    if (num < 0) return 'OOPS';
    for (let i = 0; i < num; i++) {
        if (i == 0 || i == 1) arr.push(1);
        else {
            arr.push(arr[i - 2] + arr[i - 1])
        }
    }
    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
