//write a constructor function to create an address object
//write a Factory function to do the same


//let address = createAddress('Pimpit', 'Hoville', '90210');
//console.log(address);

 // FACTORY function

 function createAddress(street, city, zip){

    return {

        street,
        city,
        zip
    };



 }
//Constructor function
 let address = new Address('a', 'b', 'c');
console.log(address);


function Address(street, city, zip){

    this.street = street;
    this.city = city;
    this.zip = zip;

}