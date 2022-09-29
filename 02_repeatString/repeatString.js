const repeatString = function(string, times) {
    let newString = string
    let i = 1
    while (i < times) {
        string += newString;
        i++;
    }
    if (times === 0) {
        return "";
    } else if (times < 0) {
        return "ERROR";
    }
    return string;
};



// Do not edit below this line
module.exports = repeatString;
