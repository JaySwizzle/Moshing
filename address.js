// address object
// street 
// city
//ZIP code
// showAddress(address)

let address = {
    
    street: 'Pimpit Ln',
    city: 'Hoville',
    zip: '45405'


};

function showAddress(address){
    for (let key in address)
    console.log(key, address[key]); 
    



}

showAddress(address);



