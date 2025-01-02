const leapYears = function(num) {
    let isCentury = num % 100 === 0;
    let isDivisibleByFour = num % 4 === 0;
    let isYearDivisibleByFourHundred = num % 400 === 0;

    if (isDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
