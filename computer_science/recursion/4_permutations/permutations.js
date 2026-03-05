const permutations = function(array) {
    let result = [];
    if (array.length == 0) {
        return [[]];
    } else {
        for (let item of array) {
            let filteredArr = array.filter(newitem => newitem != item)
            let semiResult = permutations(filteredArr);
            for (let semi of semiResult) {
                result.push([item].concat(semi));
            }
        }
    }
    return result;
}
  
// Do not edit below this line
module.exports = permutations;
