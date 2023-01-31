
function fsum(array) {
    let sum = 0;
    array.forEach( el =>  sum+=el);

    return sum;
}


function fmult(array) {
    let mult = 1;
    array.forEach( el =>  mult*=el);

    return mult;
}

// module.exports={
//     sum:fsum,
//     mult:fmult
// }

module.exports.sum=fsum;
module.exports.mult=fmult;