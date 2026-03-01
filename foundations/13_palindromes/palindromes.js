const palindromes = function (str) {
    let arr = str.split("");
    let filtered = arr.filter(letter => (letter != '.' && letter != ',' && letter != '!' && letter != ' '));
    let final = filtered.map(letter => letter = letter.toLowerCase());

    for (let i = 0; i < final.length; i++) {
        if (final.at(i) != final.at(final.length - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
