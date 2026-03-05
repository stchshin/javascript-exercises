const contains = function(object, value) {
    if (Object.values(object).includes(value)) {
        return true
    }

    for (child of Object.values(object)) {
        if (child != null && typeof child == "object") {
            if (contains(child, value)) return true;
        } else {
            if (child === value) {
                return true;
            }
        }
    }    
    return false;
};
  
// Do not edit below this line
module.exports = contains;
