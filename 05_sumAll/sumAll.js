const sumAll = function(...args) {
    let newSum = 0
    if (args[0] < 0 || args[1] < 0 ||
        typeof args[0] != "number" || typeof args[1] != "number") {
        return "ERROR";
    } else if (args[0] > args[1]) {
        for (let i = args[0]; i >= args[1]; i--) {
            newSum += i;
        }
        return newSum;
    } else {
        for (let i = args[0]; i <= args[1]; i++) {
            newSum += i;
        }
        return newSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
