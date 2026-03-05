const totalIntegers = function(object) {
    function checker(obj) {
        let count = 0;
        for (child of Object.values(obj)) {
            if (child != null && typeof child == "object") {
                count += checker(child);
            } else if (Number.isInteger(child)) {
                count++;
            }
        }
        return count;
    }

    if (typeof object != "object") {
        return undefined;
    } else {
        return checker(object)
    }
};
  
// Do not edit below this line
module.exports = totalIntegers;
