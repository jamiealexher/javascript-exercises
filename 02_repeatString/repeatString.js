const repeatString = function(string, num) {
    let printedString = string

    if (num === 0) {
        return "";
    } else if (num < 0) {
        return "ERROR";
    } else {
        for (i = 1; i < num; i++) {
            printedString += string;
        };
    
        return printedString;
    }

};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
