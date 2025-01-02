const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }

    let a;
    let b;
    if (num1 < num2){
        a = num1;
        b = num2;
    } else {
        a = num2;
        b = num1;
    }

    let sum = 0;
    for (i = a; i <= b; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
