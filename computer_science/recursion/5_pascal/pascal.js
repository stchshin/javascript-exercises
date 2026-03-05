const pascal = function(n) {
    if (n == 1) {
        return [1];
    } else {
        let result = [];
        let previousRow = pascal(n - 1);
        for (let i = 0; i < n; i++) {
            if (i == 0) {
                result[i] = 1;
            } else if (i == n - 1) {
                result[i] = 1;
            } else {
                result[i] = previousRow[i - 1] + previousRow[i];
            }
        }
        return result;
    }
};
  
// Do not edit below this line
module.exports = pascal;
