const reverseString = function(string) {
    let reverse = string.split("");

    let result = "";
    for(let i = string.length - 1; i >= 0; i--){
        result += reverse[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
