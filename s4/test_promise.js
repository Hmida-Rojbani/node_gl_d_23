function softTraitment() {
    return new Promise((resolve,reject)=>{
        let sum = 0 ;
        console.log('Connecting to Calcul API');
        setTimeout(() => {
            console.log('Retreving Results');
            sum = 1000000000;
            resolve(sum)
        }, 3000);
    });
    
    
}

console.log('Begin');
// softTraitment(res =>  {
//     By5(res, res2 => {
//         display(res2)
//     })
// });
let sum = softTraitment();
console.log('sum :',sum);
softTraitment().then(res=>By5(res))
            .then(res=>display(res))
            .catch(err => console.log('Error :',err))

console.log('End');

function display(sum) {
    console.log('sum :',sum);
}

function By5(sum) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(sum >1000000)
            reject('Value too big')
        console.log("Traiting in By5"); 
        resolve(sum*5);
    }, 3000);
    })
    
  
}