module.exports.array_mult_by=function array_mult_by(array, coef) {
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index]*coef;        
    }
    return array;
}

module.exports.array_mult_by_10=function array_mult_by_10(array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index]*10;        
    }
    return array;
}