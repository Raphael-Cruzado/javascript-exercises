const removeFromArray = function(array, ...removeItems) {
    let newArray = array.filter(inc => !removeItems.includes(inc));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
