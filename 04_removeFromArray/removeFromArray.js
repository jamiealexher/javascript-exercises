const removeFromArray = function(array, ...eraseElements) {

let newArray = [];

array.forEach((item) => {
    if (!eraseElements.includes(item)) {
        newArray.push(item);
    }
});

return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
