function softTraitment(nextFun) {
    let sum = 0 ;
    console.log('Connecting to Calcul API');
    setTimeout(() => {
        console.log('Retreving Results');
        sum = 1000000000;
        nextFun(sum)
    }, 3000);
    
}

console.log('Begin');
softTraitment(res =>  {
    By5(res, res2 => {
        display(res2)
    })
});

console.log('End');

function display(sum) {
    console.log('sum :',sum);
}

function By5(sum,callback) {
    setTimeout(() => {
        console.log("Traiting in By5"); 
        callback(sum*5);
    }, 3000);
  
}